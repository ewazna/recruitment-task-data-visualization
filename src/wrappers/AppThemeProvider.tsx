import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import type { ReactNode } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1962ef",
    },
    background: {
      default: "#14151A",
      paper: "#1E1F24",
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
  },
});

type ThemeProps = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
