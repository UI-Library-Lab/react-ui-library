import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import React, { useEffect, useState } from 'react';
import { paletteModes } from '../src/utils/configs/constants/defaultConfigs';
import { channel } from './preview';


export const decorators = [
  (Story) => {
    const [isDark, setDark] = useState(false);

    useEffect(() => {
      channel.on(DARK_MODE_EVENT_NAME, setDark);
      return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
    }, [channel, setDark]);

    const customTheme = createUILibraryTheme({
      palette: {
        mode: isDark ? paletteModes.DARK : paletteModes.LIGHT
      }
    });

    return (
      <UILibraryThemeProvider theme={customTheme}>
        <Story />
      </UILibraryThemeProvider>);
  }
];
