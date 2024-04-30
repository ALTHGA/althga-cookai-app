// import original module declarations
import 'styled-components/native';
import { theme } from '~/global/theme';

type CustomTheme = typeof theme;
declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}
