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
COPY ./libs/assets/package.json ./assets-package.json
COPY ./libs/ui/package.json ./ui-package.json
ARG assets_version
ARG ui_version
RUN jq --arg v "$assets_version" '.version = $v' ./assets-package.json > ./assets-package.tmp.json
RUN jq --arg v "$ui_version" '.version = $v' ./ui-package.json > ./ui-package.tmp.json

FROM $node_version AS image
WORKDIR /usr/component-library
COPY ./package*.json ./
COPY ./decorate-angular-cli.js ./

FROM image AS build
ENV CYPRESS_DOWNLOAD_MIRROR=https://nexus.riaint.ee/repository/cypress-raw-proxy/
RUN npm config set registry https://nexus.riaint.ee/repository/npm-public/
RUN npm ci
COPY . .
COPY --from=apk ./usr/component-library/assets-package.tmp.json ./libs/assets/package.json
COPY --from=apk ./usr/component-library/ui-package.tmp.json ./libs/ui/package.json
RUN npm run storybook:compodoc
RUN npm run build-storybook

FROM $nginx_version
COPY ./nginx/http-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./usr/component-library/dist/storybook/storybook ./usr/share/nginx/html/component-library
CMD ["nginx", "-g", "daemon off;"]
