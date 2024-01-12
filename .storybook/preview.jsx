import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import React, { useEffect, useState } from 'react'
import { createUiLibraryTheme, UiLibraryThemeProvider } from '../src/index';
import {addons} from '@storybook/addons';
import { paletteModes } from '../src/utils/configs/constants/defaultConfigs';

const channel = addons.getChannel();

export const decorators = [
  (Story) => {
      const [isDark, setDark] = useState(false);

    useEffect(() => {
      channel.on(DARK_MODE_EVENT_NAME, setDark);
      return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
    }, [channel, setDark]);

    const customTheme = createUiLibraryTheme({
      palette: {
        mode: isDark ? paletteModes.DARK : paletteModes.LIGHT
      }
    })

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
