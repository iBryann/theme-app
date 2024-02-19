// export interface ITheme {
//   title: string;
//   colors: {
//     body: {
//       bg: string;
//       fg: string;
//     },
//     header: {
//       bg: string;
//       fg: string;
//     },
//   }
// }

export interface ITheme {
  colors: Colors;
}

export interface Colors {
  primary: {
    yellow: Palette;
    blue: Palette;
    sea_blue: Palette;
    magenta: Palette;
    purple: Palette;
    aqua_green: Palette;
    marker_green: Palette;
  };
  secondary: {
    light_blue: Palette;
    green: Palette;
  };
  neutral: {
    gray: Palette;
  };
  button: {
    royal_blue: Palette;
    red: Palette;
  };
}

export interface Palette {
  "050": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}