[![Build Status](https://dev.azure.com/IgniteUI/igniteui-angular/_apis/build/status/IgniteUI.igniteui-angular-samples?branchName=master)](https://dev.azure.com/IgniteUI/igniteui-angular/_build/latest?definitionId=4&branchName=master)
[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Ignite UI for Angular - Samples

This project is using Ignite UI for Angular components to demonstrate different scenarios related to the usage of each component. The project is tightly related to [Ignite UI DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx). All samples are part of the official component topics from our [website](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html).

## Setup
To setup the project run:

```
npm install
```

## Build
To build the project run:

```
npm run build
```

This will produce an AOT build and [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) samples supporting both Sass and CSS.

## Dev Server
To start the dev server (including IE support) run:

```
npm run start
```

To start in modern browsers only, run:

```
npm run start:es6
```

### Starting from Angular v8 the project will not be supported/start in IE due to the new default compilation target es2015.

## Dev Server and Live Editing
To generate the live editing applications along with the dev server (including IE support) run:
```
npm run start:live-editing
```

To start in modern browsers only, run:

```
npm run start:live-editing:es6
```

## Live Editing Watcher
Use this command to start the server with capability to regenerate [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) JSON files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) when a change related to the samples is made (including IE support):

```
npm run start:watch-live-editing
```

To start in modern browsers only, run:

```
npm run start:watch-live-editing:es6
```

## Generate Live Editing JSON files
To generate only the [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) samples files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) run:
```
npm run generate-live-editing
```

## Running with the DocFX project

In order to combine the execution of both [DocFX](https://github.com/IgniteUI/igniteui-docfx) and Ignite UI Angular Samples projects, use `npm run start`.
After starting both projects you will see the embed samples into the DocFX site builder, under `localhost:port` hostname.

## Running with custom [igniteui-angular](https://github.com/IgniteUI/igniteui-angular) build

In order to test a specific branch created in [igniteui-angular]((https://github.com/IgniteUI/igniteui-angular)) project with `igniteui-angular-samples` you have to follow these steps:

In **igniteui-angular** :
- build the source code with the version/branch you want to test: 
```
npm run build:lib
```
- copy the builded `igniteui-angular` folder, located in the `dist` directory

In **igniteui-angular-samples**:

- paste the copied `igniteui-angular` folder in the place of its identical folder in `node_modules` directory
