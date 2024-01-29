import React from 'react'
import { createUiLibraryTheme, UiLibraryThemeProvider } from '../src/index';

export const decorators = [
  (Story) => {
    const customTheme = createUiLibraryTheme()

    return (
      <UiLibraryThemeProvider theme={customTheme}>
          <Story />
      </UiLibraryThemeProvider>)
  }
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
