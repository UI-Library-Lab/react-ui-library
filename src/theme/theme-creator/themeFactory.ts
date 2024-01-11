import {
  ICustomUiLibraryTheme,
  IUiLibraryTheme,
} from '~/utils/configs/protocols';
/* -------------------------------------------------------------------------- */
/**
 * base abstract factory to create theme such as user and default theme
 */
export abstract class ThemeCreator {
  /* ----------------------------- factory method ----------------------------- */
  public abstract themeFactory(
    uiLibraryThemeConfigs: IUiLibraryTheme,
    userTheme?: ICustomUiLibraryTheme,
  ): IUiLibraryTheme;

  /* ------------------------------- main logic ------------------------------- */
  public getUiLibraryTheme(
    uiLibraryThemeConfigs: IUiLibraryTheme,
    userTheme?: ICustomUiLibraryTheme,
  ): IUiLibraryTheme {
    return this.themeFactory(uiLibraryThemeConfigs, userTheme);
  }
}
