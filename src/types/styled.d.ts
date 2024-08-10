import type { CSSProp } from 'styled-components';
import type { Theme } from '@src/globalStyle/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    /*
     * 필요시 여기에 타입을 정의
     */
  }
}
