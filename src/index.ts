import { DownloadSquareOutline } from './components/icons';
import Button from './components/inputs/button/Button';
import './styles/globalStyles.css';
import createUiLibraryTheme from './theme/themeCreator';
import { paletteModes } from './utils/configs/constants/defaultConfigs';
/* --------------------------------- exports -------------------------------- */
export {
  type ICustomUiLibraryTheme,
  type IUiLibraryTheme,
} from './utils/configs/protocols';
export {
  UiLibraryThemeProvider,
  useUiLibraryTheme,
} from './theme/themeContext';
export { createUiLibraryTheme };
export { Button };
export { paletteModes };
export { DownloadSquareOutline };
