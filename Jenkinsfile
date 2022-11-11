pipeline {
  agent any

  options {
    ansiColor("xterm")
    buildDiscarder(logRotator(numToKeepStr: "20"))
    disableConcurrentBuilds()
    skipStagesAfterUnstable()
    timestamps()
  }

  environment {
    APP_NAME = 'ria-storybook'
    DOCKER_IMAGE_TAG = getStorybookImageTag()
    CYPRESS_DOWNLOAD_MIRROR = "https://nexus.riaint.ee/repository/cypress-raw-proxy/"
    PUBLIC_REGISTRY = "nexus.riaint.ee:8500"
    HARBOR_REGISTRY = "harbor.riaint.ee"
    DOCKER_IMAGE = "riaee/sun-ria-storybook"
    HARBOR_DOCKER_IMAGE = "${HARBOR_REGISTRY}/sun/sun-${APP_NAME}"
    HUSKY = 0
    NAMESPACE = "sun"
  }

  parameters {
    booleanParam(name: "PUBLISH_STYLES", description: "Publish styles (tag exists, but wasn't published before)", defaultValue: false)
    booleanParam(name: "PUBLISH_UI", description: "Publish ui (tag exists, but wasn't published before)", defaultValue: false)
    booleanParam(name: "PUBLISH_ICONS", description: "Publish icons (tag exists, but wasn't published before)", defaultValue: false)
  }

  stages {
    stage("Skip?") {
      steps {
        script {
          result = sh (script: "git log -1 | grep '.*\\[skip ci\\].*'", returnStatus: true)
          if (result == 0) {
            echo "'skip ci' spotted in git commit. Aborting."
            env.skip_ci = true
          }
        }
      }
    }
    stage('CI') {
      when {
        expression { !env.skip_ci }
      }
      agent {
        docker {
          image 'nexus.riaint.ee:8500/node:lts'
        }
      }
      environment {
        HOME = "${env.WORKSPACE}"
      }
      stages {
        stage('npm install') {
          steps {
            sh 'npm config set registry https://nexus.riaint.ee/repository/npm-public/'
            sh "npm ci"
          }
        }
        stage('code analysis') {
          steps {
            sh "npm run generate-icons"
            sh "npx nx workspace-lint"
            sh "npx nx affected --base=HEAD~1 --target=lint --parallel=3"
            sh "npx nx run-many --all --target=test --parallel --coverage --coverageReporters=lcov"
          }
          post {
            always {
              junit 'reports/jest/*.xml'
            }
          }
        }
        stage('verify build') {
          steps {
            script {
              ["styles", "ui", "icons"].each {
                sh "npx nx build ${it}"
             }
            }
          }
        }
        stage('get affected projects') {
          steps {
            script {
              env.affected_libraries = sh ( script: "npx nx print-affected --base=HEAD~1 --select=projects --type=lib", returnStdout: true).trim()
              echo "Affected libraries: ${env.affected_libraries}"

              env.affected_apps = sh ( script: "npx nx print-affected --base=HEAD~1 --select=projects --type=app", returnStdout: true).trim()
              echo "Affected apps: ${env.affected_apps}"
            }
          }
        }
      }
    }
    stage('cypress tests') {
      when {
         expression { !env.skip_ci }
      }
      agent {
        docker {
          image 'nexus.riaint.ee:8500/cypress/base:18.6.0'
        }
      }
      environment {
        HOME = "${env.WORKSPACE}"
      }
      steps {
        sh 'npm config set registry https://nexus.riaint.ee/repository/npm-public/'
        sh 'npm ci'
        sh 'npm run generate-icons'
        sh 'npm run storybook:compodoc'
        sh 'npx nx run ui-e2e:e2e'
      }
      post {
        always {
          junit 'reports/cypress/*.xml'
        }
      }
    }
    stage('sonarqube analysis') {
      when {
        expression { !env.skip_ci }
      }
      agent {
        docker {
          image 'nexus.riaint.ee:8500/sonarsource/sonar-scanner-cli:4.6'
          args "-u 0 -t"
        }
      }
      steps {
        withSonarQubeEnv('RIA SonarQube') {
          sh "sonar-scanner"
        }
      }
      post {
        always {
          sh "chmod -R 777 .";
        }
      }
    }
    stage('release and publish libraries') {
      when {
        expression { !env.skip_ci }
        expression { isMaster() }
      }
      agent {
        docker {
          image 'nexus.riaint.ee:8500/node:lts'
        }
      }
      environment {
        BITBUCKET = credentials('jenkins-bitbucket-webhook')
        HOME = "${env.WORKSPACE}"
      }
      stages {
        stage('git setup') {
          steps {
            sh "npm config set registry https://nexus.riaint.ee/repository/npm-public/"
            sh "npm ci"
            sh "git config --global user.name 'semantic-release-bot'"
            sh "git config --global user.email 'semantic-release-bot@example.com'"
            sh "git remote set-url origin https://${BITBUCKET_USR}:${BITBUCKET_PSW}@stash.ria.ee/scm/sun/veera-components.git"
          }
        }
        stage('release libraries') {
          steps {
            script {
              env.previous_styles_library_version = getVersion("styles")
              env.previous_ui_library_version = getVersion("ui")
              env.previous_icons_library_version = getVersion("icons")

              ["styles", "ui", "icons", "storybook"].each {
                try {
                  sh "npx nx run ${it}:version"
                  if (it == 'storybook') {
                    env.storybook_library_version = getVersion("storybook")
                    echo "Current storybook version: ${env.storybook_library_version}"
                  }
                } catch (e) {
                  def newVersion = getVersion(it)
                  if (env."previous_${it}_library_version" == getVersion(it)) {
                    throw e
                  }
                  def tag = "${it}-${newVersion}"
                  def tagExists = sh ( script: "git tag -l ${tag}", returnStdout: true).trim()
                  if (tagExists) {
                    sh "git tag -d ${tag}"
                    sh "git push origin :refs/tags/${tag}"
                  }
                  throw e
                }

                env.styles_library_version = getVersion("styles")
                env.ui_library_version = getVersion("ui")
                env.icons_library_version = getVersion("icons")
              }
            }
          }
        }
        stage('publish libraries') {
          steps {
            script {
              withCredentials([usernamePassword(credentialsId: 'nexus-sun-npm-local', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh 'echo "registry=https://nexus.riaint.ee/repository/sun-npm-local/" > .npmrc'
                sh "echo '_auth=${PASSWORD}' >> .npmrc"
              }
              ["styles", "ui", "icons"].each {
                if (env."previous_${it}_library_version" == env."${it}_library_version" && !params."PUBLISH_${it.toUpperCase()}") {
                  echo "${it} version ${getVersion(it)} is already published"
                  return
                }
                sh "npx nx build ${it}"
                sh "npm run publish:${it}"
                echo "Published library ${it}"
              }
            }
          }
        }
      }
    }
    stage('build and publish storybook docker image') {
      when {
        expression { !env.skip_ci }
        expression { affected("storybook") }
      }
      steps {
        script {
          def styles_version = env.styles_library_version ?: getVersion("styles")
          def ui_version = env.ui_library_version ?: getVersion("ui")
          def icons_version = env.icons_library_version ?: getVersion("icons")
          def dockerImage = docker.build(DOCKER_IMAGE, [
            "--build-arg node_version=${PUBLIC_REGISTRY}/node:lts",
            "--build-arg nginx_version=${PUBLIC_REGISTRY}/nginx:1.23.1-alpine",
            "--build-arg alpine_version=${PUBLIC_REGISTRY}/alpine:3.14",
            "--build-arg styles_version=${styles_version}",
            "--build-arg ui_version=${ui_version}",
            "--build-arg icons_version=${icons_version}",
            "-f ./libs/storybook/Dockerfile",
            "."
          ].join(" "))
          docker.withRegistry("https://registry-1.docker.io/v2/", 'dockerhub-sun') {
            dockerImage.push(env.DOCKER_IMAGE_TAG)
            dockerImage.push('latest')
          }

          // MFN requirement: replicate manually to harbor registry
          docker.withRegistry("https://harbor.riaint.ee/sun", 'harbor-sun') {
            sh "docker tag ${DOCKER_IMAGE} ${HARBOR_DOCKER_IMAGE}:${DOCKER_IMAGE_TAG}"
            sh "docker tag ${DOCKER_IMAGE} ${HARBOR_DOCKER_IMAGE}:latest"

            sh "docker push ${HARBOR_DOCKER_IMAGE}:${DOCKER_IMAGE_TAG}"
            sh "docker push ${HARBOR_DOCKER_IMAGE}:latest"
          }
        }
      }
    }
    stage('deploy storybook: dev') {
      when {
        allOf {
          expression { !env.skip_ci }
          expression { isMaster() && affected("storybook") || waitForUserApproval(100, 'Deploy to dev?')}
          expression { return currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }
      }
      environment {
        HELM_KUBEAPISERVER = "https://rp-rancher.opnd.eu/k8s/clusters/c-zf2ts"
        HELM_KUBETOKEN = credentials('sun-dev-k8s-token')
        ENV = "dev"
      }
      steps {
        script {
          deploy();
        }
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}

def getStorybookImageTag() {
  if (isMaster()) {
    return env.storybook_library_version == null ? (getVersion("storybook") + '.1') : env.storybook_library_version
  }
  return env.CHANGE_BRANCH == null ? env.BRANCH_NAME : env.CHANGE_BRANCH
}

def getVersion(String libraryName) {
  def props = readJSON file: "libs/${libraryName}/package.json"
  return props.version
}

def isMaster() {
  return env.BRANCH_NAME == "master"
}

def affected(String project) {
  return env.affected_libraries.split(', ').contains(project)
}

void deploy() {
  checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false,
  extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'deployment']], submoduleCfg: [],
  userRemoteConfigs: [[credentialsId: 'jenkins-bitbucket-webhook', url: 'https://stash.ria.ee/scm/sun/helm-charts.git']]])

  def ns = "sun-${ENV}"

  docker.image('nexus.riaint.ee:8500/alpine/helm:3.9.4').inside('-u 0 --entrypoint= ') {
    dir("deployment/${APP_NAME}") {
      sh script: """
      helm version
      helm list -n ${NAMESPACE}
      helm lint . -f values.yaml -f values-${ENV}.yaml

      helm upgrade -n ${NAMESPACE} ${APP_NAME} . -f values.yaml  -f values-${ENV}.yaml --set image.tag=${DOCKER_IMAGE_TAG} --install --create-namespace --atomic --timeout 5m0s
      helm list -n ${NAMESPACE} | grep ${APP_NAME}
      """, label: "Deploy application";
    }
  }
}

def waitForUserApproval(Integer secondsToWait, String message) {
  def approval = false

  try {
    timeout(time: secondsToWait, unit: 'SECONDS') {
      approval = input(
        id: 'Proceed1',
        message: message,
        parameters: [[$class: 'BooleanParameterDefinition', defaultValue: false, description: '', name: 'APPROVAL']]
      )
    }
  } catch(org.jenkinsci.plugins.workflow.steps.FlowInterruptedException e) {
    echo "Approval timout or aborted by user"
  }
  return approval;
}
