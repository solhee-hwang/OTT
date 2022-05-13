import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#1E90FF",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiButton: {
      variant: "contained",
      disableRipple: true,
      color: "primary",
    },
    MuiTextField: {
      variant: "outlined",
      color: "primary",
    },
    MuiPaper: {
      elevation: 0,
    },
  },
});
