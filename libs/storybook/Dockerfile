ARG node_version=node:lts
ARG nginx_version=nginx:1.23.1-alpine
ARG alpine_version=alpine:3.14
ARG use_private_registry=false
ARG private_apk_registry=""
ARG private_npm_registry=""


FROM $alpine_version AS apk
ARG use_private_registry
ARG private_apk_registry
ARG styles_version
ARG ui_version
ARG icons_version
ARG react_version

RUN if [ "$use_private_registry" = true ]; then \
    sh -c "mv /etc/apk/repositories /etc/apk/repositories-backup-of-default" && \
    echo $private_apk_registry > /etc/apk/repositories \
; fi

# update upgrade
RUN apk update && apk upgrade
# install package without cache index locally
RUN apk add --no-cache jq
WORKDIR /usr/component-library
COPY ./libs/styles/package.json ./styles-package.json
COPY ./libs/ui/package.json ./ui-package.json
COPY ./libs/icons/package.json ./icons-package.json
COPY ./libs/react-ui/package.json ./react-package.json

RUN jq --arg v "$styles_version" '.version = $v' ./styles-package.json > ./styles-package.tmp.json
RUN jq --arg v "$ui_version" '.version = $v' ./ui-package.json > ./ui-package.tmp.json
RUN jq --arg v "$icons_version" '.version = $v' ./icons-package.json > ./icons-package.tmp.json
RUN jq --arg v "$react_version" '.react = $v' ./react-package.json > ./react-package.tmp.json


FROM $node_version AS image
WORKDIR /usr/component-library
COPY ./package*.json ./
COPY ./decorate-angular-cli.js ./


FROM image AS build
ARG cypress_download_mirror
ARG use_private_registry
ARG private_npm_registry

ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
RUN if [ "$use_private_registry" = true ]; then \
    npm config set registry $private_npm_registry && \
    export CYPRESS_INSTALL_BINARY=0 && \
    echo "CYPRESS_INSTALL_BINARY=${CYPRESS_INSTALL_BINARY}" && \
    npm i; \
else \
    npm ci; \
fi

ENV NX_DAEMON=false
COPY . .
COPY --from=apk ./usr/component-library/styles-package.tmp.json ./libs/styles/package.json
COPY --from=apk ./usr/component-library/ui-package.tmp.json ./libs/ui/package.json
COPY --from=apk ./usr/component-library/icons-package.tmp.json ./libs/icons/package.json
COPY --from=apk ./usr/component-library/react-package.tmp.json ./libs/react/package.json
RUN npm run storybook:compodoc
RUN npm run generate-icons
RUN npm run build-storybook


FROM $nginx_version
COPY ./nginx/http-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./usr/component-library/dist/storybook/storybook ./usr/share/nginx/html/component-library
CMD ["nginx", "-g", "daemon off;"]
