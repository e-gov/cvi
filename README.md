# Veera Components Library

This project includes a pattern library and a re-usable component library for Angular. The pattern library uses [Storybook](https://storybook.js.org).

## Quick Start & Documentation

Documentation and Installation instructions can be found in the Storybook:

https://sundmusteenus-dev.eesti.ee/storybook/?path=/story/intro--page (will be replaced soon with a public version)

Styles are based on the original Veera Design System:

https://www.figma.com/file/nNCV5kRqdRkS8MOCK1ZbqU/Veera-Design-System

## Developing

### Adding/updating packages

When adding/upgrading peer dependencies then make sure that they are also updated in `libs/LIB-NAME/package.json` in case of peerDependencies and in `libs/LIB-NAME/ng-package.json` for dependencies to be packaged with the library.

### Publishing

In case of `fix` and `feat` commit types a new changelog entry is generated and the packages published automatically after a successful build.

### Code style

#### Angular

##### Selectors

Use `[veera-component-selector=local-selector-name]` naming convention for [content projection selectors](https://angular.io/guide/content-projection).

For example, if you need to introduce a content selector that inserts custom content before a title in a panel (eg. fictional `PanelComponent/<veera-ng-panel>` component), an appropriate code would be `<ng-content select="[veera-ng-panel=before-title]"></ng-content>`.

## Running the Storybook

Run `npm run storybook` to build documentation and run the Storybook locally.

### Running storybook locally in docker

docker build -f ./libs/storybook/Dockerfile -t ria-storybook .
docker-compose up storybook
docker-compose down
url: http://localhost:3005/

### Publishing to dockerhub locally

docker build -f ./libs/storybook/Dockerfile -t ria-storybook .
docker tag ria-storybook:latest riaee/sun-ria-storybook:latest
docker push riaee/sun-ria-storybook:latest

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Using the Nx build system

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Running Cypress tests against Storybook

Storybook needs to be up and running as Cypress tests are using its Angular components in iFrame windows. Check previous chapter about 'Running the Storybook'.

When storybook is up and running, run `npm run cy:ui` which opens up Cypress visual testing tool. Select E2E Testing, which presents you all components tests.
