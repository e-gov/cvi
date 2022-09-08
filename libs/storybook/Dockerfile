ARG node_version=node:lts
ARG nginx_version=nginx:1.23.1-alpine

FROM $node_version AS image
WORKDIR /usr/component-library
COPY ./package*.json ./
COPY ./decorate-angular-cli.js ./

FROM image AS build
ENV CYPRESS_DOWNLOAD_MIRROR=https://nexus.riaint.ee/repository/cypress-raw-proxy/
RUN npm config set registry https://nexus.riaint.ee/repository/npm-public/
RUN npm ci
COPY . .
RUN npm run storybook:compodoc
RUN npm run build-storybook

FROM $nginx_version
COPY ./nginx/http-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./usr/component-library/dist/storybook/storybook ./usr/share/nginx/html/component-library
CMD ["nginx", "-g", "daemon off;"]
