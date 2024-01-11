import { PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider, useTheme } from 'styled-components';
import { IUiLibraryTheme } from '..';
/* -------------------------------- interface ------------------------------- */
interface IUiLibraryThemeProps {
  theme: IUiLibraryTheme;
}
/* ------------------------------- Provider ------------------------------- */
/**
 * theme provider for handling the user theme and default theme
 * as well to send the theme configs for all of our components
 * @param props user theme and component children
 */
const UiLibraryThemeProvider = (
  props: PropsWithChildren<IUiLibraryThemeProps>,
) => {
  const { theme, children } = props;
  return (
    <ThemeProvider theme={theme as unknown as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};
/* ------------------------------- custom hook ------------------------------ */
/**
 * custom hook to get the theme configurations
 */
const useUiLibraryTheme = (): IUiLibraryTheme => {
  return useTheme() as unknown as IUiLibraryTheme;
};
/* --------------------------------- exports -------------------------------- */
export { UiLibraryThemeProvider, useUiLibraryTheme };
