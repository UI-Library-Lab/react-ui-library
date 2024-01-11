import 'styled-components';
import { IUiLibraryTheme } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends IUiLibraryTheme {}
}
