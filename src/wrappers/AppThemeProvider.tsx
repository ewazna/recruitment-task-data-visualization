import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import type { ReactNode } from "react";

const colors = {
  primary: "#1962ef",
  grey: "#a0a0a0",
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    background: {
      default: "#14151A",
      paper: "#1E1F24",
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
  },
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50px",
          padding: "4px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          height: "44px",
          alignItems: "center",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px !important",
          border: "none !important",
          color: colors.grey,
          textTransform: "none",
          fontWeight: 600,
          padding: "6px 20px",
          height: "100%",
          transition: "all 0.3s ease",

          "&.Mui-selected": {
            backgroundColor: colors.primary,
            color: "white",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: colors.primary,
            },
          },
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "white",
          },
        },
      },
    },
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
