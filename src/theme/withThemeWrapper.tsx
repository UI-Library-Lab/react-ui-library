import React from 'react';
import createUiLibraryTheme from './themeCreator';
import { UiLibraryThemeProvider, useUiLibraryTheme } from './themeContext';
/* -------------------------------------------------------------------------- */
/**
 * handles the theme provider and passing the theme configs to the
 * passing component
 * @param Component
 * @returns
 */
export default function withThemeWrapper<
  COMPONENTS_PROPS extends JSX.IntrinsicAttributes,
>(Component: React.FunctionComponent<COMPONENTS_PROPS>) {
  const WrappedComponent = (props: COMPONENTS_PROPS) => {
    let theme = useUiLibraryTheme();
    if (!theme) {
      theme = createUiLibraryTheme();
      return (
        <UiLibraryThemeProvider theme={theme}>
          <Component {...props} />
        </UiLibraryThemeProvider>
      );
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
}
