ARG node_version=node:lts
ARG nginx_version=nginx:1.23.1-alpine
ARG alpine_version=alpine:3.14

FROM $alpine_version AS apk
# configure apk to mirror packages from ria nexus apk proxy
RUN ["sh", "-c", "mv /etc/apk/repositories /etc/apk/repositories-backup-of-default"]
RUN ["sh", "-c", "echo https://nexus.riaint.ee/repository/apk-proxy/v3.14/main/ > /etc/apk/repositories"]
# update upgrade
RUN apk update && apk upgrade
# install package without cache index locally
RUN apk add --no-cache jq
WORKDIR /usr/component-library
COPY ./libs/styles/package.json ./styles-package.json
COPY ./libs/ui/package.json ./ui-package.json
COPY ./libs/icons/package.json ./icons-package.json
ARG styles_version
ARG ui_version
ARG icons_version
RUN jq --arg v "$styles_version" '.version = $v' ./styles-package.json > ./styles-package.tmp.json
RUN jq --arg v "$ui_version" '.version = $v' ./ui-package.json > ./ui-package.tmp.json
RUN jq --arg v "$icons_version" '.version = $v' ./icons-package.json > ./icons-package.tmp.json

FROM $node_version AS image
WORKDIR /usr/component-library
COPY ./package*.json ./
COPY ./decorate-angular-cli.js ./

FROM image AS build
ENV CYPRESS_DOWNLOAD_MIRROR=https://nexus.riaint.ee/repository/cypress-raw-proxy/
RUN npm config set registry https://nexus.riaint.ee/repository/npm-public/
RUN npm ci
COPY . .
COPY --from=apk ./usr/component-library/styles-package.tmp.json ./libs/styles/package.json
COPY --from=apk ./usr/component-library/ui-package.tmp.json ./libs/ui/package.json
COPY --from=apk ./usr/component-library/icons-package.tmp.json ./libs/icons/package.json
RUN npm run storybook:compodoc
RUN npm run generate-icons
RUN npm run build-storybook

FROM $nginx_version
COPY ./nginx/http-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./usr/component-library/dist/storybook/storybook ./usr/share/nginx/html/component-library
CMD ["nginx", "-g", "daemon off;"]
