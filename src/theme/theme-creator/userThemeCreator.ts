import {
  CustomColorConfig,
  ICustomUiLibraryTheme,
  IUiLibraryTheme,
  NPaletteConfigs,
  NTypographyConfigs,
} from '~/utils/configs/protocols';
import { ThemeCreator } from './themeFactory';
/* -------------------------------------------------------------------------- */
/**
 * factory of creating user theme based on custom theme configs
 */
class UserThemeCreator extends ThemeCreator {
  /* ----------------------------- factory method ----------------------------- */
  public themeFactory = (
    uiLibraryThemeConfigs: IUiLibraryTheme,
    userTheme?: ICustomUiLibraryTheme | undefined,
  ): IUiLibraryTheme => ({
    typography: this.combineTypographytheme(uiLibraryThemeConfigs, userTheme),
    palette: {
      mode: userTheme?.palette?.mode ?? uiLibraryThemeConfigs.palette.mode,
      base: {
        ...uiLibraryThemeConfigs.palette.base,
        ...(userTheme?.palette?.base && userTheme.palette.base),
      },
      action: {
        hover:
          userTheme?.palette?.action?.hover ||
          uiLibraryThemeConfigs.palette.action.hover,
      },
      background:
        userTheme?.palette?.background ||
        uiLibraryThemeConfigs.palette.background,
      disabled: {
        ...uiLibraryThemeConfigs.palette.disabled,
        ...(userTheme?.palette?.disabled && userTheme.palette.disabled),
      },
      text: {
        ...uiLibraryThemeConfigs.palette.text,
        ...(userTheme?.palette?.text && userTheme?.palette?.text),
      },
      gray: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.gray,
        userTheme?.palette?.gray,
      ),
      primary: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.primary,
        userTheme?.palette?.primary,
      ),
      secondary: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.secondary,
        userTheme?.palette?.secondary,
      ),
      success: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.success,
        userTheme?.palette?.success,
      ),
      warning: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.warning,
        userTheme?.palette?.warning,
      ),
      error: this.combineColorTheme(
        uiLibraryThemeConfigs.palette.error,
        userTheme?.palette?.error,
      ),
    },
    shadow: {
      ...uiLibraryThemeConfigs.shadow,
      ...(userTheme?.shadow && userTheme?.shadow),
    },
    blur: {
      ...uiLibraryThemeConfigs.blur,
      ...(userTheme?.blur && userTheme?.blur),
    },
    spacing: {
      ...uiLibraryThemeConfigs.spacing,
      ...(userTheme?.spacing && userTheme?.spacing),
    },
    breakpoints: {
      ...uiLibraryThemeConfigs.breakpoints,
    },
  });

  /* ----------------------------- private methods ---------------------------- */
  private combineColorTheme = (
    defaultColorTheme: NPaletteConfigs.ColorConfigs,
    customColorTheme?: CustomColorConfig,
  ): NPaletteConfigs.ColorConfigs => {
    return { ...defaultColorTheme, ...(customColorTheme && customColorTheme) };
  };

  /* -------------------------------------------------------------------------- */
  private combineTypographytheme = (
    uiLibraryThemeConfigs: IUiLibraryTheme,
    userTheme?: ICustomUiLibraryTheme,
  ): NTypographyConfigs.Typography => ({
    fontFamily:
      userTheme?.typography?.fontFamily ||
      uiLibraryThemeConfigs.typography.fontFamily,
    letterSpacing:
      userTheme?.typography?.letterSpacing ||
      uiLibraryThemeConfigs.typography.letterSpacing,
    fontWight: {
      ...uiLibraryThemeConfigs.typography.fontWight,
      ...(userTheme?.typography?.fontWight && userTheme?.typography?.fontWight),
    },
    fontSize: {
      text: {
        xs: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.xs,
          ...(userTheme?.typography?.fontSize?.text?.xs &&
            userTheme?.typography?.fontSize?.text?.xs),
        },
        sm: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.sm,
          ...(userTheme?.typography?.fontSize?.text?.sm &&
            userTheme?.typography?.fontSize?.text?.sm),
        },
        md: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.md,
          ...(userTheme?.typography?.fontSize?.text?.md &&
            userTheme?.typography?.fontSize?.text?.md),
        },
        lg: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.lg,
          ...(userTheme?.typography?.fontSize?.text?.lg &&
            userTheme?.typography?.fontSize?.text?.lg),
        },
        xl: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.xl,
          ...(userTheme?.typography?.fontSize?.text?.xl &&
            userTheme?.typography?.fontSize?.text?.xl),
        },
      },
      display: {
        xs: {
          ...uiLibraryThemeConfigs.typography.fontSize.text.xs,
          ...(userTheme?.typography?.fontSize?.text?.xs &&
            userTheme?.typography?.fontSize?.text?.xs),
        },
        sm: {
          ...uiLibraryThemeConfigs.typography.fontSize.display.sm,
          ...(userTheme?.typography?.fontSize?.display?.sm &&
            userTheme?.typography?.fontSize?.display?.sm),
        },
        md: {
          ...uiLibraryThemeConfigs.typography.fontSize.display.md,
          ...(userTheme?.typography?.fontSize?.display?.md &&
            userTheme?.typography?.fontSize?.display?.md),
        },
        lg: {
          ...uiLibraryThemeConfigs.typography.fontSize.display.lg,
          ...(userTheme?.typography?.fontSize?.display?.lg &&
            userTheme?.typography?.fontSize?.display?.lg),
        },
        xl: {
          ...uiLibraryThemeConfigs.typography.fontSize.display.xl,
          ...(userTheme?.typography?.fontSize?.display?.xl &&
            userTheme?.typography?.fontSize?.display?.xl),
        },
        '2xl': {
          ...uiLibraryThemeConfigs.typography.fontSize.display['2xl'],
          ...(userTheme?.typography?.fontSize?.display?.['2xl'] &&
            userTheme.typography.fontSize.display['2xl']),
        },
      },
    },
  });
  /* -------------------------------------------------------------------------- */
}
/* --------------------------------- exports -------------------------------- */
const userThemeCreator = new UserThemeCreator();
export default userThemeCreator;
