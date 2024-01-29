/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
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
>(Component: React.ForwardRefRenderFunction<any, COMPONENTS_PROPS>) {
  const WrappedComponent = (props: COMPONENTS_PROPS, ref: any) => {
    const ForwaredRefComponent = forwardRef(Component) as unknown as (
      props: COMPONENTS_PROPS,
      ref: any,
    ) => JSX.Element;
    let theme = useUiLibraryTheme();
    if (!theme) {
      theme = createUiLibraryTheme();
      return (
        <UiLibraryThemeProvider theme={theme}>
          <ForwaredRefComponent ref={ref} {...props} />
        </UiLibraryThemeProvider>
      );
    }

    return <ForwaredRefComponent {...props} ref={ref} />;
  };

  return forwardRef(WrappedComponent);
}
