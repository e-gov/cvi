# Common Visual Identity Component Library

This project includes a pattern library and a re-usable component library for Angular. The pattern library uses [Storybook](https://storybook.js.org).

## Quick Start & Documentation

Documentation and Installation instructions can be found in the Storybook:

https://e-gov.github.io/cvi/

Styles are based on the original Veera Design System:

https://www.figma.com/file/nNCV5kRqdRkS8MOCK1ZbqU/Veera-Design-System

Keep in mind, that the implementations are not part of the official Veera Design System.

## Using the Components

The built packages are published to the public Koodivaramu repository, from where you can download and add them to your application:

https://koodivaramu.eesti.ee/e-gov/cvi/-/packages

In addition, the storybook docker image is also published to the Koodivaramu repository:

https://koodivaramu.eesti.ee/e-gov/cvi/container_registry

## Contributing
If you want to contribute to the Common Visual Identity Component Library, create a fork, make changes and create a pull-request back to this repository.  
Follow the [GitHub contribution guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) for more detailed instructions.

### Adding/updating packages
When adding/upgrading peer dependencies then make sure that they are also updated in `libs/LIB-NAME/package.json` in case of peerDependencies and in `libs/LIB-NAME/ng-package.json` for dependencies to be packaged with the library.

### Commit message format
The project follows the [conventional commit format](https://www.conventionalcommits.org) convention and uses the [semver nx plugin](https://github.com/jscutlery/semver) for versioning.
Make sure to use the appropriate commit messages.

### Code style

#### Angular

##### Selectors

Use `[veera-component-selector=local-selector-name]` naming convention for [content projection selectors](https://angular.io/guide/content-projection).

For example, if you need to introduce a content selector that inserts custom content before a title in a panel (eg. fictional `PanelComponent/<veera-ng-panel>` component), an appropriate code would be `<ng-content select="[veera-ng-panel=before-title]"></ng-content>`.

## Running the Storybook

Run `npm run storybook` to build documentation and run the Storybook locally.

### Running storybook locally in docker

docker build -f ./libs/storybook/Dockerfile -t veera-storybook .
docker-compose up storybook
docker-compose down
url: http://localhost:3005/

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Using the Nx build system

[Nx Documentation](https://nx.dev/angular)

[Getting Started With Nx](https://nx.dev/getting-started/intro)

[Concepts](https://nx.dev/concepts)

## Running Cypress tests against Storybook

Storybook needs to be up and running as Cypress tests are using its Angular components in iFrame windows. Check previous chapter about 'Running the Storybook'.

When storybook is up and running, run `npm run cy:ui` which opens up Cypress visual testing tool. Select E2E Testing, which presents you all components tests.
