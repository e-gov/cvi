# e-Gov Common Visual Identity (CVI) Component Library

This repository includes a shared CSS library (preprocessed with Sass) and HTML examples based on it, as well as a UI kit in Angular and a typed tree-shakable icons library.

By design, the CSS has no dependency on a specific Javascript framework and since the styles and html is separated then interested contributors can easily add component libraries in other frameworks such as React or Vue.js.
Also, the Angular UI library has no dependency to any design system/framework such as Bootstrap or Google's Material in order to reduce dependence on 3rd party vendors.

## Quick Start & documentation

Both CSS framework and Angular component library use [Storybook](https://storybook.js.org).

Documentation and installation instructions can be viewed in the e-Gov CVI's Storybook:

[https://e-gov.github.io/cvi/](https://e-gov.github.io/cvi/).

Styles were based on the initial Veera Design System:

https://www.figma.com/file/nNCV5kRqdRkS8MOCK1ZbqU/Veera-Design-System

But please take note that e-Gov CVI **is not Veera**.

### Installation

1. Add the public Koodivaramu registry to your project by following the instructions [here](https://koodivaramu.eesti.ee/e-gov/cvi/-/packages/385).
2. Install the necessary package to your project:
   1. CSS framework: `npm i --save @egov/cvi-styles`
   2. Angular components: `npm i --save @egov/cvi-ng`
   3. Icons: `npm i --save @egov/cvi-icons`
3. Import the dependencies to your project by following dedicated instructions in the docs for the [CSS framework](https://e-gov.github.io/cvi/?path=/docs/styles-how-to-install--how-to-install), [Angular components](https://e-gov.github.io/cvi/?path=/docs/angular-installation--installation), and [icons](https://e-gov.github.io/cvi/?path=/docs/icons-how-to-use--page).

## Packages and artifacts repository

The built packages are published to the public Koodivaramu repository, from where you can download and add them to your application:

https://koodivaramu.eesti.ee/e-gov/cvi/-/packages

In addition, the Storybook Docker image is also published to the Koodivaramu repository:

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

Use `[cvi-component-selector=local-selector-name]` naming convention for [content projection selectors](https://angular.io/guide/content-projection).

For example, if you need to introduce a content selector that inserts custom content before a title in a panel (eg. fictional `PanelComponent/<cvi-ng-panel>` component), an appropriate code would be `<ng-content select="[cvi-ng-panel=before-title]"></ng-content>`.

## Running the Storybook

Run `npm run storybook` to build documentation and run the Storybook locally.

### Running Storybook locally in Docker

```
docker build -f ./libs/storybook/Dockerfile -t cvi-storybook .
docker-compose up storybook
docker-compose down
url: http://localhost:3005/
```

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Using the Nx build system

[Nx Documentation](https://nx.dev/angular)

[Getting Started With Nx](https://nx.dev/getting-started/intro)

[Concepts](https://nx.dev/concepts)

## Running Cypress tests against Storybook

Storybook needs to be up and running as Cypress tests are using its Angular components in iFrame windows. Check previous chapter about 'Running the Storybook'.

When storybook is up and running, run `npm run cy:ui` which opens up Cypress visual testing tool. Select E2E Testing, which presents you all components tests.

## Running Chromatic tests

The project uses automatic screenshot testing via Chromatic. Run `npm run chromatic`, open the resulting URL and go through the visual changes, accepting or denying them in the Chromatic UI.

Chromatic CI also runs on every push. The action always passes (even when visual changes are detected) except for cases when a story is broken. Contributors and reviewers should check the results of the action (and accept or decline them in the Chromatic UI) by following a link in the build log.

Publishing to Chromatic also gives a possibility to share a Storybook link for a specific branch (even unpushed, if the local npm command is used) in this format `https://<branch>--6373995e3f280e239470296d.chromatic.com`.

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
