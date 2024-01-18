import { ITheme } from 'interfaces/styled';

declare module 'styled-components' {
  export type DefaultTheme = ITheme;
}
