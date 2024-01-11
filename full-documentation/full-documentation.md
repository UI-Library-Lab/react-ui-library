# UI Library Full Documentation

# Table of Contents

- [UI Library tile](#ui-library-full-documentation)
- [Overview](#overview)
- [Component Category](#components-category)
- [Folder Structuring](#folder-structuring)

## Overview


## Components Category

in this component library we categorized components based on MUI category for components that you can see that list in this [link](https://mui.com/material-ui/)
list of category is:

- `Input`: all of component related to user interacting such Inputs, Buttons, Text fields and etc.
- `Layout`: all of components related to the layout lik Container, Grid and ect.
- `Feedback`: all of components related to the feedback components to the user after a user action or requests lik Alert or Dialogs.
- `Icons`: all of the Icon components.
- `Data Display`: components related to the showing data like List, Tables, Avatar and etc.
- `Surface`: components that is a surface which contains some components to show like App bar(header), Accordion, Card and etc
- `Navigaion`: all components that is represented as a component to navigating logic like Breadcrumbs, Drawer, Menu, Paignation and etc

## Folder Structuring

in this project we follow the folder structuring based on our component categoriy.
for example in the components folder we have all folders with name of [component category](#components-category) as we described and inside of each of them we have components related to that category.

```bash
.
└── src/
    ├── components/
    │   ├── index.ts
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
