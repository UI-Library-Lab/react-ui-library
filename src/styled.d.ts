import 'styled-components';
import { type IUiLibraryTheme } from '@ui-library-lab/core-js';

declare module 'styled-components' {
  export interface DefaultTheme extends IUiLibraryTheme {}
}
