import { paletteModes } from './constants/default-configs';
/* -------------------------- Typography -------------------------- */
export namespace NTypographyConfigs {
  export type FontConfig = {
    size: string;
    lineHeight: string;
  };
  export type Typography = {
    fontFamily: string;
    letterSpacing: string;
    fontWight: {
      /**
       * 400
       */
      normal: number;
      /**
       * 500
       */
      medium: number;
      /**
       * 600
       */
      semibold: number;
      /**
       * 700
       */
      bold: number;
    };
    fontSize: {
      text: {
        xs: FontConfig;
        sm: FontConfig;
        md: FontConfig;
        lg: FontConfig;
        xl: FontConfig;
      };
      display: {
        xs: FontConfig;
        sm: FontConfig;
        md: FontConfig;
        lg: FontConfig;
        xl: FontConfig;
        '2xl': FontConfig;
      };
    };
  };
}
/* --------------------------- Palettes --------------------------- */
export namespace NPaletteConfigs {
  export type ColorConfigs = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  export type PaletteModes = {
    mode: paletteModes;
    background: string;
    text: {
      secondary: string;
      primary: string;
      tertiary: string;
    };
    disabled: {
      background: string;
      secondary: string;
      primary: string;
      tertiary: string;
    };
    action: {
      hover: string;
    };
  };

  export interface Palette extends PaletteModes {
    base: {
      white: string;
      black: string;
    };
    gray: ColorConfigs;
    primary: ColorConfigs;
    secondary: ColorConfigs;
    success: ColorConfigs;
    warning: ColorConfigs;
    error: ColorConfigs;
  }
}
/* --------------------------------- Shadows -------------------------------- */
export type ShadowSizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
};
/* ---------------------------------- Blurs --------------------------------- */
export type BlursConfigs = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
/* --------------------------------- Spacing -------------------------------- */
export type SpacingConfigs = {
  0: string;
  px: string;
  /**
   * 2px
   */
  0.5: string;
  /**
   * 4px
   */
  1: string;
  /**
   * 8px
   */
  2: string;
  /**
   * 12px
   */
  3: string;
  /**
   * 16px
   */
  4: string;
  /**
   * 20px
   */
  5: string;
  /**
   * 24px
   */
  6: string;
  /**
   * 32px
   */
  8: string;
  /**
   * 40px
   */
  10: string;
  /**
   * 48px
   */
  12: string;
  /**
   * 56px
   */
  14: string;
  /**
   * 64px
   */
  16: string;
  /**
   * 72px
   */
  18: string;
  /**
   * 80px
   */
  20: string;
  /**
   * 96px
   */
  24: string;
  /**
   * 112px
   */
  28: string;
  /**
   * 128px
   */
  32: string;
  /**
   * 144px
   */
  36: string;
  /**
   * 160px
   */
  40: string;
  /**
   * 192px
   */
  48: string;
  /**
   * 224px
   */
  56: string;
  /**
   * 256px
   */
  64: string;
};
/* -------------------------------------------------------------------------- */
export type BreakPoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
/* -------------------------------------------------------------------------- */
/*                            Main theme interface                            */
/* -------------------------------------------------------------------------- */
/**
 * main theme interface that should be followed
 * in all of components and library
 */
export interface IUiLibraryTheme {
  palette: NPaletteConfigs.Palette;
  typography: NTypographyConfigs.Typography;
  shadow: ShadowSizes;
  blur: BlursConfigs;
  spacing: SpacingConfigs;
  breakpoints: BreakPoints;
}
/* -------------------------------------------------------------------------- */
/*                           custom theme protocols                           */
/* -------------------------------------------------------------------------- */
export type CustomColorConfig = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

/**
 * custom theme that is can handled by user and should be exact
 * types of IUiLibraryTheme interface but this one user has this ability to not pass all of the configs
 */
export interface ICustomUiLibraryTheme {
  /* --------------------------------- palette -------------------------------- */
  palette?: {
    mode?: paletteModes;
    background?: string;
    base?: {
      white?: string;
      black?: string;
    };
    text?: {
      secondary?: string;
      primary?: string;
      tertiary?: string;
    };
    disabled?: {
      background?: string;
      secondary?: string;
      primary?: string;
      tertiary?: string;
    };
    action?: {
      hover?: string;
    };
    white?: string;
    black?: string;
    gray?: CustomColorConfig;
    primary?: CustomColorConfig;
    secondary?: CustomColorConfig;
    success?: CustomColorConfig;
    warning?: CustomColorConfig;
    error?: CustomColorConfig;
  };
  /* ------------------------------- typography ------------------------------- */
  typography?: {
    fontFamily?: string;
    letterSpacing: string;
    fontWight?: {
      normal?: number;
      medium?: number;
      semibold?: number;
      bold?: number;
    };
    fontSize?: {
      text?: {
        xs?: NTypographyConfigs.FontConfig;
        sm?: NTypographyConfigs.FontConfig;
        md?: NTypographyConfigs.FontConfig;
        lg?: NTypographyConfigs.FontConfig;
        xl?: NTypographyConfigs.FontConfig;
      };
      display?: {
        xs?: NTypographyConfigs.FontConfig;
        sm?: NTypographyConfigs.FontConfig;
        md?: NTypographyConfigs.FontConfig;
        lg?: NTypographyConfigs.FontConfig;
        xl?: NTypographyConfigs.FontConfig;
        '2xl'?: NTypographyConfigs.FontConfig;
      };
    };
  };
  /* --------------------------------- shadows -------------------------------- */
  shadow?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
  };
  /* ---------------------------------- blur ---------------------------------- */
  blur?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  /* --------------------------------- Spacing -------------------------------- */
  spacing?: {
    0?: string;
    px?: string;
    0.5?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    8?: string;
    10?: string;
    12?: string;
    14?: string;
    16?: string;
    18?: string;
    20?: string;
    24?: string;
    28?: string;
    32?: string;
    36?: string;
    40?: string;
    48?: string;
    56?: string;
    64?: string;
  };
}
