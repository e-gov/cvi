# 📚 e-Gov Common Visual Identity (CVI)

This repository includes a shared CSS library, preprocessed with Sass, along with HTML examples based on it. It also houses a user interface (UI) kit in Angular and a typed, tree-shakable icon library.

The CSS has been architectured to be independent of any specific Javascript framework. This makes it possible for contributors to easily integrate component libraries from other frameworks such as React or Vue.js. The Angular UI library has also been constructed free of any dependencies on design systems/frameworks like Bootstrap or Google's Material. This ensures a reduction in dependence on third-party vendors 🛠️.

## 🚀 Quick Start & Documentation

The CSS framework and Angular component library utilize [Storybook](https://storybook.js.org) for comprehensive documentation and seamless usage.

To get started, you can access the installation instructions and documentation on e-Gov CVI's Storybook:

[📌 https://e-gov.github.io/cvi/](https://e-gov.github.io/cvi/)

The styles in this repository take inspiration from the initial Veera Design System, which you can find here:

🔗 https://www.figma.com/file/nNCV5kRqdRkS8MOCK1ZbqU/Veera-Design-System

Please note, e-Gov CVI **is not Veera**. We've taken inspiration from their work, but our approach and implementation are unique 💡.

To discuss any issues, suggestions or questions, join our public [CVI Signal group](https://signal.group/#CjQKIII854RES5vfIQ8Oqw5fWmS2_FY8cJTEM1RSJI9fSsplEhC4dNwXGkcfqf34YmQJJDi_).

### 🛠️ Installation Instructions

Follow these steps to install and integrate our library:

1. 📥 Add the public Koodivaramu registry to your project by following the instructions provided [here](https://koodivaramu.eesti.ee/e-gov/cvi/-/packages/385).

2. 📦 Install the necessary package to your project:
  - CSS framework: Use the command `npm i --save @egov/cvi-styles`
  - Angular components: Use the command `npm i --save @egov/cvi-ng`
  - React components: Use the command `npm i --save @egov/cvi-react`
  - Icons: Use the command `npm i --save @egov/cvi-icons`

3. 🏁 After installation, import the dependencies into your project. You'll find dedicated instructions for this in the documentation for the [CSS framework](https://e-gov.github.io/cvi/?path=/docs/styles-how-to-install--how-to-install), [Angular components](https://e-gov.github.io/cvi/?path=/docs/angular-installation--installation), and [icons](https://e-gov.github.io/cvi/?path=/docs/icons-how-to-use--page).


## 📦 Packages and Artifacts Repository

The built packages are published to the public Koodivaramu repository, from where you can download and add them to your application. You can access it via the following link:

[🔗 Koodivaramu Repository](https://koodivaramu.eesti.ee/e-gov/cvi/-/packages)

In addition, the Storybook Docker image is also published to the Koodivaramu repository:

[🔗 Storybook Docker Image](https://koodivaramu.eesti.ee/e-gov/cvi/container_registry)

---

## 🤝 Contributing

If you want to contribute to the Common Visual Identity Component Library, follow these steps:

1. Create a fork of the repository.
2. Make changes in your own fork.
3. Create a pull-request back to this repository.

For more detailed instructions, follow the link below:

🔗 [GitHub Contribution Guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

---

### 🔄 Adding/Updating Packages

When adding/upgrading peer dependencies, ensure that they are also updated in the following files:

- `libs/LIB-NAME/package.json` for peerDependencies.
- `libs/LIB-NAME/ng-package.json` for dependencies to be packaged with the library.

---

### 📝 Commit Message Format

The project follows the [conventional commit format](https://www.conventionalcommits.org) convention and uses the [semver nx plugin](https://github.com/jscutlery/semver) for versioning. Ensure to use the appropriate commit messages.

---

### 🧑‍💻 Code Style

#### Angular

##### Selectors

Use `[cvi-component-selector=local-selector-name]` naming convention for [content projection selectors](https://angular.io/guide/content-projection).

For example, to introduce a content selector that inserts custom content before a title in a panel (eg. fictional `PanelComponent/<cvi-ng-panel>` component), an appropriate code would be `<ng-content select="[cvi-ng-panel=before-title]"></ng-content>`.

---

## 🚀 Running the Storybook

Run the following command to build documentation and start the Storybook locally: 

`npm run storybook`

### 🐳 Running Storybook locally in Docker

To run Storybook locally using Docker, follow these steps:

1. Build the Docker image with the following command: 

`docker build -f ./libs/storybook/Dockerfile -t cvi-storybook .`

2. Start the Storybook container with the following command:

`docker-compose up storybook`

3. Stop the container with the following command:

`docker-compose down`

4. the Storybook interface at `http://localhost:3005/` in your web browser.

## 🔎 Understand your workspace

To see a diagram of the dependencies of your projects, run the following command:

`nx graph`

This will provide you with an overview of your workspace and how the different projects and libraries are interconnected.

## 🔨 Using the Nx build system

To learn more about the Nx build system, check out the following resources:

- [🔗 Nx Documentation](https://nx.dev)
- [🔗 Getting Started With Nx](https://nx.dev/getting-started/intro)
- [🔗 Concepts](https://nx.dev/concepts)

## 🚀 Running Cypress tests against Storybook

To run Cypress tests against Storybook, make sure that Storybook is up and running (see the previous section). Then, run the following command: `npm run cypress:ui`

This will open up the Cypress visual testing tool. Select E2E Testing to view all component tests. Note that Cypress tests use Angular components in iFrame windows, which is why Storybook needs to be up and running.

## 🚀 Running Chromatic tests

The project uses automatic screenshot testing via Chromatic.

1. To run the tests, use the following command in your terminal: `npm run chromatic`
2. Open the resulting URL and review the visual changes, accepting or denying them in the Chromatic UI.
   
💡 Chromatic CI also runs on every push. The action always passes (even when visual changes are detected) except for cases when a story is broken. Contributors and reviewers should check the results of the action (and accept or decline them in the Chromatic UI) by following a link in the build log. 💡

Publishing to Chromatic also gives a possibility to share a Storybook link for a specific branch (even non-pushed, if the local npm command is used) in this format: 

`https://<branch>--6373995e3f280e239470296d.chromatic.com`

## 🙏 Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions. 🎉
