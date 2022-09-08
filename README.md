# Veera Components

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

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
