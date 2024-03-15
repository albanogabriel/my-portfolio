import 'styled-components'

import { darkTheme } from '../styles/theme/darkTheme'

type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType {}
}
