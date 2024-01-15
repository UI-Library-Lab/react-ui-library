import { defaultConfigs, paletteModes } from './constants/default-configs';
import { IUiLibraryTheme, NPaletteConfigs } from './protocols';
/* ------------------------------ light palette ----------------------------- */
/**
 * palette theme for light mode
 */
export const lightDefaultPalette: NPaletteConfigs.PaletteModes = {
  mode: paletteModes.DARK,
  action: {
    hover: defaultConfigs.palette.gray[700],
  },
  disabled: {
    background: defaultConfigs.palette.gray[50],
    secondary: defaultConfigs.palette.gray[700],
    primary: defaultConfigs.palette.gray[300],
    tertiary: defaultConfigs.palette.gray[200],
  },
  background: defaultConfigs.palette.white,
  text: {
    primary: defaultConfigs.palette.gray[900],
    secondary: defaultConfigs.palette.gray[700],
    tertiary: defaultConfigs.palette.gray[500],
  },
};
/* ------------------------------ dark palette ------------------------------ */
/**
 * palette theme for the dark mode
 */
export const darkDefaultPalette: NPaletteConfigs.PaletteModes = {
  mode: paletteModes.DARK,
  action: {
    hover: defaultConfigs.palette.gray[700],
  },
  disabled: {
    background: defaultConfigs.palette.gray[700],
    secondary: defaultConfigs.palette.gray[400],
    primary: defaultConfigs.palette.gray[500],
    tertiary: defaultConfigs.palette.gray[600],
  },
  background: defaultConfigs.palette.gray[900],
  text: {
    primary: defaultConfigs.palette.white,
    secondary: defaultConfigs.palette.gray[300],
    tertiary: defaultConfigs.palette.gray[400],
  },
};
/* --------------------------- main default theme --------------------------- */
export const defaultTheme: IUiLibraryTheme = {
  /* --------------------------------- palette -------------------------------- */
  palette: {
    base: {
      black: defaultConfigs.palette.black,
      white: defaultConfigs.palette.white,
    },
    ...lightDefaultPalette,
    gray: {
      50: defaultConfigs.palette.gray[50],
      100: defaultConfigs.palette.gray[100],
      200: defaultConfigs.palette.gray[200],
      300: defaultConfigs.palette.gray[300],
      400: defaultConfigs.palette.gray[400],
      500: defaultConfigs.palette.gray[500],
      600: defaultConfigs.palette.gray[600],
      700: defaultConfigs.palette.gray[700],
      800: defaultConfigs.palette.gray[800],
      900: defaultConfigs.palette.gray[900],
    },
    primary: {
      50: defaultConfigs.palette.primary[50],
      100: defaultConfigs.palette.primary[100],
      200: defaultConfigs.palette.primary[200],
      300: defaultConfigs.palette.primary[300],
      400: defaultConfigs.palette.primary[400],
      500: defaultConfigs.palette.primary[500],
      600: defaultConfigs.palette.primary[600],
      700: defaultConfigs.palette.primary[700],
      800: defaultConfigs.palette.primary[800],
      900: defaultConfigs.palette.primary[900],
    },
    secondary: {
      50: defaultConfigs.palette.secondary[50],
      100: defaultConfigs.palette.secondary[100],
      200: defaultConfigs.palette.secondary[200],
      300: defaultConfigs.palette.secondary[300],
      400: defaultConfigs.palette.secondary[400],
      500: defaultConfigs.palette.secondary[500],
      600: defaultConfigs.palette.secondary[600],
      700: defaultConfigs.palette.secondary[700],
      800: defaultConfigs.palette.secondary[800],
      900: defaultConfigs.palette.secondary[900],
    },
    success: {
      50: defaultConfigs.palette.success[50],
      100: defaultConfigs.palette.success[100],
      200: defaultConfigs.palette.success[200],
      300: defaultConfigs.palette.success[300],
      400: defaultConfigs.palette.success[400],
      500: defaultConfigs.palette.success[500],
      600: defaultConfigs.palette.success[600],
      700: defaultConfigs.palette.success[700],
      800: defaultConfigs.palette.success[800],
      900: defaultConfigs.palette.success[900],
    },
    warning: {
      50: defaultConfigs.palette.warning[50],
      100: defaultConfigs.palette.warning[100],
      200: defaultConfigs.palette.warning[200],
      300: defaultConfigs.palette.warning[300],
      400: defaultConfigs.palette.warning[400],
      500: defaultConfigs.palette.warning[500],
      600: defaultConfigs.palette.warning[600],
      700: defaultConfigs.palette.warning[700],
      800: defaultConfigs.palette.warning[800],
      900: defaultConfigs.palette.warning[900],
    },
    error: {
      50: defaultConfigs.palette.error[50],
      100: defaultConfigs.palette.error[100],
      200: defaultConfigs.palette.error[200],
      300: defaultConfigs.palette.error[300],
      400: defaultConfigs.palette.error[400],
      500: defaultConfigs.palette.error[500],
      600: defaultConfigs.palette.error[600],
      700: defaultConfigs.palette.error[700],
      800: defaultConfigs.palette.error[800],
      900: defaultConfigs.palette.error[900],
    },
  },
  /* ------------------------------- typography ------------------------------- */
  typography: {
    fontFamily: defaultConfigs.typography.fontFamily,
    letterSpacing: defaultConfigs.typography.fontFamily,
    fontWight: {
      normal: defaultConfigs.typography.fontWight.normal,
      medium: defaultConfigs.typography.fontWight.medium,
      semibold: defaultConfigs.typography.fontWight.semibold,
      bold: defaultConfigs.typography.fontWight.bold,
    },
    fontSize: {
      text: {
        xs: {
          lineHeight: defaultConfigs.typography.fontSize.text.xs.lineHeight,
          size: defaultConfigs.typography.fontSize.text.xs.size,
        },
        sm: {
          lineHeight: defaultConfigs.typography.fontSize.text.sm.lineHeight,
          size: defaultConfigs.typography.fontSize.text.sm.size,
        },
        md: {
          lineHeight: defaultConfigs.typography.fontSize.text.md.lineHeight,
          size: defaultConfigs.typography.fontSize.text.md.size,
        },
        lg: {
          lineHeight: defaultConfigs.typography.fontSize.text.lg.lineHeight,
          size: defaultConfigs.typography.fontSize.text.lg.size,
        },
        xl: {
          lineHeight: defaultConfigs.typography.fontSize.text.xl.lineHeight,
          size: defaultConfigs.typography.fontSize.text.xl.size,
        },
      },
      display: {
        xs: {
          lineHeight: defaultConfigs.typography.fontSize.display.xs.lineHeight,
          size: defaultConfigs.typography.fontSize.display.xs.size,
        },
        sm: {
          lineHeight: defaultConfigs.typography.fontSize.display.sm.lineHeight,
          size: defaultConfigs.typography.fontSize.display.sm.size,
        },
        md: {
          lineHeight: defaultConfigs.typography.fontSize.display.md.lineHeight,
          size: defaultConfigs.typography.fontSize.display.md.size,
        },
        lg: {
          lineHeight: defaultConfigs.typography.fontSize.display.lg.lineHeight,
          size: defaultConfigs.typography.fontSize.display.lg.size,
        },
        xl: {
          lineHeight: defaultConfigs.typography.fontSize.display.xl.lineHeight,
          size: defaultConfigs.typography.fontSize.display.xl.size,
        },
        '2xl': {
          lineHeight:
            defaultConfigs.typography.fontSize.display['2xl'].lineHeight,
          size: defaultConfigs.typography.fontSize.display['2xl'].size,
        },
      },
    },
  },
  shadow: {
    xs: defaultConfigs.shadows.xs,
    sm: defaultConfigs.shadows.sm,
    md: defaultConfigs.shadows.md,
    lg: defaultConfigs.shadows.lg,
    xl: defaultConfigs.shadows.xl,
    '2xl': defaultConfigs.shadows['2xl'],
    '3xl': defaultConfigs.shadows['3xl'],
  },
  blur: {
    sm: defaultConfigs.blur.sm,
    md: defaultConfigs.blur.md,
    lg: defaultConfigs.blur.lg,
    xl: defaultConfigs.blur.xl,
  },
  /* --------------------------------- Spacing -------------------------------- */
  spacing: {
    0: defaultConfigs.spacing[0],
    px: defaultConfigs.spacing.px,
    /**
     * 2px
     */
    0.5: defaultConfigs.spacing[0],
    /**
     * 4px
     */
    1: defaultConfigs.spacing[1],
    /**
     * 8px
     */
    2: defaultConfigs.spacing[2],
    /**
     * 12px
     */
    3: defaultConfigs.spacing[3],
    /**
     * 16px
     */
    4: defaultConfigs.spacing[4],
    /**
     * 20px
     */
    5: defaultConfigs.spacing[5],
    /**
     * 24px
     */
    6: defaultConfigs.spacing[6],
    /**
     * 32px
     */
    8: defaultConfigs.spacing[8],
    /**
     * 40px
     */
    10: defaultConfigs.spacing[10],
    /**
     * 48px
     */
    12: defaultConfigs.spacing[12],
    /**
     * 56px
     */
    14: defaultConfigs.spacing[14],
    /**
     * 64px
     */
    16: defaultConfigs.spacing[16],
    /**
     * 72px
     */
    18: defaultConfigs.spacing[18],
    /**
     * 80px
     */
    20: defaultConfigs.spacing[20],
    /**
     * 96px
     */
    24: defaultConfigs.spacing[24],
    /**
     * 112px
     */
    28: defaultConfigs.spacing[28],
    /**
     * 128px
     */
    32: defaultConfigs.spacing[32],
    /**
     * 144px
     */
    36: defaultConfigs.spacing[36],
    /**
     * 160px
     */
    40: defaultConfigs.spacing[40],
    /**
     * 192px
     */
    48: defaultConfigs.spacing[48],
    /**
     * 224px
     */
    56: defaultConfigs.spacing[56],
    /**
     * 256px
     */
    64: defaultConfigs.spacing[64],
  },
  /* ------------------------------- Breakpoints ------------------------------ */
  breakpoints: {
    sm: defaultConfigs.breakpoints.sm,
    md: defaultConfigs.breakpoints.md,
    lg: defaultConfigs.breakpoints.lg,
    xl: defaultConfigs.breakpoints.xl,
  },
};
