# Ui Library Storybook

# Table of Contents

- [UiLibrary](#uiLibrary-storybook)
- [Overview](#overview)
- [Technologies](#technologies)
- [Getting Started Storybook](#getting-started-storybook)
  - [Development](#development)
  - [Production](#production)
- [Getting Started with library](#getting-started-library)
  - [Install the library](#install-the-library)
  - [Usage](#usage)
- [Naming Conventions](#naming-convetions)
- [Git Conventions](#git-conventions)
- [Commits Conventions](#commits-conventions)

## Overview

`Ui Library storybook` is a project based on the Ui Library design that has been implemented as a library component.

### Technologies

- language: [Typescript](https://www.typescriptlang.org/)
- framework: [React](https://reactjs.org/)
- lintins: [ESlint](https://eslint.org/)
- module bundler: [Vite](https://vitejs.dev/)
- storybook: [Storybook](https://storybook.js.org/docs/)

## Folder Structuring

in this project we follow the folder structuring based on component categories

> note: for more information about component categories please visit [full-documentation](./full-documentation/full-documentation.md)

```bash
.
└── src/
    ├── components/
    |   ├── index.ts
    │   ├── Input/
    │   │   └── Button/
    │   │       ├── story/
    │   │       │   ├── button.stories.tsx
    │   │       │   └── template.tsx
    │   │       ├── prototype/
    │   │       │   └── buttonProto.ts
    │   │       ├── button.tsx
    │   │       └── style.ts
    │   └── Surface/
    │       └── app-bar/
    │           ├── story/
    │           │   ├── AppBar.stories.tsx
    │           │   └── template
    │           ├── prototype/
    │           │   └── appBarProto.ts
    │           ├── AppBar.tsx
    │           └── AppBar.module.css
    └── utils/
        ├── assets/
        │   └── icons
        ├── configs
        ├── helpers
        └── static-data
```

## Getting Started Storybook

you can start storybook of the library project in two ways: running simple, running with Docker

### Development

```bash
 yarn dev | npm run dev
```

### Production

#### Build and Run with Docker

```bash
  docker-compose -f docker-compose.yml up [-d] [--build] [--foce-recreate]
```

## Getting Started library

you can see the npm address of the component from this [link](https://www.npmjs.com/package/@dvh-uiLibrary/uiLibrary-storybook)

### install the library

to install the library in your project you can use following commands:

npm:

```
npm i @dvh-uiLibrary/uiLibrary-storybook
```

yarn:

```
yarn add @dvh-uiLibrary/uiLibrary-storybook
```

### Usage

for using this library inside your projects you can import the components from the root directory of the project<br/>
example:

```tsx
import { Button } from "@dvh-uiLibrary/uiLibrary-storybook";

function ExampleButton() {
  return (
    <div>
      <Button label="Submit" backgroundColor="blue" />
    </div>
  );
}
```

## Naming Convetions:

1. all **_folders_** follow the kebab-case convention for naming.
2. all **_files_** follow the camelCase convention for naming.
3. all **_variables_** and **_functions_** follow the camelCase convention for naming.

## Git Conventions:

for working with the git we should follow the workflow based on this convention,<br/>
at firts make your branch based on the latest version of the develop branch with following naming conenvtions for the branch name:

```
[type of task]/[branch title with kebab case letters]
```

for type of task we have:

- feature: for add new feature task
- refactor: if your task is to refactoring some of the codes
- fix: if your task is debugging some features

for example

```
feature/add-button-component
```

<br/>

after finishing your task make pull request to the `develop` branch

## Commits Conventions:

for the commits we should follow the convention that it covers id of your task related to this commit in the tasks board, times that you worked on this commit, and phase of this commit.
<br/>
pattern:

```
[`[type of your task]`][ `'closes'` | `'refs'` ]#[your task id]@[times that you've spent on this commit]<br/>
[your message description]
```

for type of tasks we have:

- [DOC]: for adding feature or refactoring in the documentations
- [FEAT]: for adding new feature to the project
- [REF]: refactor some of codes
- [TEST]: for adding tests
- [DEB]: for debugging

for `'closes'` and `'refs'`:<br/>
if you have done you task and you want to move it into done sections, use `'closes'`, and if there is still works to be done use `'refs'`
<br/>
<br/>
for the task id:<br/>
you should enter id of your taks in the tasks board that is related to this commit
<br/>
<br/>
for the time: <br/>
you should enter times that you have spent on this task based on hour(h), minutes(m)
<br/>

Example:<br/>

- step one:<br/>
  use git commit without `-m`

  ```
  git commit
  ```

- step two:<br/>
  add your commit description like the pattern<br/>
  for this task of documentation we have added a commit like this

  ```
  [DOC]:closes#124@20m
  add commit conventions to the readme file
  ```

- step three:<br/>
  save the file and exit
  <br/>
  <br/>
  in this view we can find what is the topic that we are working on, phase of this commit, related task in the task board and how many time resources we have spent on it
