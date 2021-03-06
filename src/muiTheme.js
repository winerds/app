import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
      contrastText: "#000000"
    }
  }
  // palette: {
  //   primary: {
  //     light: "#63a4ff",
  //     main: "#1976d2",
  //     dark: "#004ba0",
  //     contrastText: "#fff"
  //   },
  //   secondary: {
  //     light: "#ffbd45",
  //     main: "#fb8c00",
  //     dark: "#c25e00",
  //     contrastText: "#000"
  //   }
  // }
  // overrides: {
  // }
});

// TODO: is this still needed? Use Container instead
export const layout = {
  width: "auto",
  marginTop: theme.spacing(0) * 3,
  marginBottom: theme.spacing(0),
  marginLeft: theme.spacing(0) * 3,
  marginRight: theme.spacing(0) * 3,
  [theme.breakpoints.up(1100 + theme.spacing(0) * 3 * 2)]: {
    width: 1100,
    marginLeft: "auto",
    marginRight: "auto"
  }
};
