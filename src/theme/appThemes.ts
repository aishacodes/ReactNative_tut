type ThemeType = typeof appThemes;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const appThemes = {
  aishaRed: "#343434",
};
