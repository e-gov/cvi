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
    STORYBOOK_IMAGE_TAG = getStorybookImageTag()
    CYPRESS_DOWNLOAD_MIRROR = "https://nexus.riaint.ee/repository/cypress-raw-proxy/"
    PUBLIC_REGISTRY = "nexus.riaint.ee:8500"
    STORYBOOK_DOCKER_IMAGE = "riaee/sun-ria-storybook"
    HUSKY = 0
    STORYBOOK_APP_NAME = 'ria-storybook'
  }

  parameters {
    booleanParam(name: "DEPLOY_FEATURE_SANDBOX", description: "Deploy to feature sandbox", defaultValue: false)
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
            sh "npx nx workspace-lint"
            sh "npx nx affected --base=HEAD~1 --target=lint --parallel=3"
            sh "npx nx run-many --all --target=test --parallel --coverage --coverageReporters=lcov"
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
              sh "git fetch --prune --prune-tags"

              env.previous_assets_library_version = getVersion("assets")
              env.previous_ui_library_version = getVersion("ui")

              ["assets", "storybook", "ui"].each {
                sh "npx nx run ${it}:version"
                if (it == 'storybook') {
                  env.storybook_library_version = getVersion("storybook")
                  echo "Current storybook version: ${env.storybook_library_version}"
                }
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
              env.affected_libraries.split(', ').each {
                if (it == '' || it == 'storybook') {
                  return
                }
                if (env."previous_${it}_library_version" == getVersion(it)) {
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
          def dockerImage = docker.build(STORYBOOK_DOCKER_IMAGE, [
            "--build-arg node_version=${PUBLIC_REGISTRY}/node:lts",
            "--build-arg nginx_version=${PUBLIC_REGISTRY}/nginx:1.23.1-alpine",
            "-f ./libs/storybook/Dockerfile",
            "."
          ].join(" "))
          docker.withRegistry("https://registry-1.docker.io/v2/", 'dockerhub-sun') {
            dockerImage.push(env.STORYBOOK_IMAGE_TAG)
            if (isMaster()) {
              dockerImage.push()
            }
          }
        }
      }
    }
    stage('deploy storybook: dev') {
      when {
        allOf {
          expression { !env.skip_ci }
          expression { affected("storybook") }
          expression { isMaster() || waitForUserApproval(100, 'Deploy to dev?')}
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
    stage('deploy storybook: feature-sandbox') {
      when {
        allOf {
          not { branch 'master' }
          expression { !env.skip_ci }
          expression { affected("storybook") }
          expression { params.DEPLOY_FEATURE_SANDBOX || waitForUserApproval(100, 'Deploy to feature-sandbox?')}
          expression { return currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }
      }
      environment {
        ENV = 'sandbox'
      }
      steps {
        script {
          deploy();
        }
      }
    }
    stage('deploy storybook: test') {
      when {
        allOf {
          branch 'master'
          expression { !env.skip_ci }
          expression { affected("storybook") }
          expression { return currentBuild.result == null || currentBuild.result == 'SUCCESS' }
        }
      }
      environment {
        ENV = 'test'
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
    dir("deployment/${STORYBOOK_APP_NAME}") {
      sh script: """
      helm version
      helm list -n ${ns}
      helm lint . -f values.yaml -f values-${ENV}.yaml

      helm upgrade -n ${ns} ${STORYBOOK_APP_NAME} . -f values.yaml  -f values-${ENV}.yaml --set image.tag=${STORYBOOK_IMAGE_TAG} --install --create-namespace --atomic --timeout 5m0s
      helm list -n ${ns} | grep ${STORYBOOK_APP_NAME}
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
