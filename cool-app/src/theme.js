import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const colorTokens = {
   grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
	prime:{

		100: '#FFE29D',
		200: '#FFB300',
		300: "#E8EBFF",
		400: "#3F57FF",
		500: "#8F9BB3",
		600: "#1E1E1E",
		700: "#3E57FE",

	}
};


// mui theme settings
export const themeSettings =() => {
  return {
    palette: {
            // palette values for dark mode
            primary: {
              dark: colorTokens.prime[700],
              main: colorTokens.prime[400],
              light: colorTokens.primary[400],
            },
            neutral: {
              dark: colorTokens.prime[400],
              main: colorTokens.grey[0],
              mediumMain: colorTokens.grey[700],
              medium: colorTokens.grey[0],
              light: colorTokens.grey[200],
            },
            background: {
              default: colorTokens.prime[300],
              alt: colorTokens.prime[100],
            },
          }
       /* : {*/
            /*// palette values for light mode*/
            /*primary: {*/
              /*dark: colorTokens.primary[700],*/
              /*main: colorTokens.primary[500],*/
              /*light: colorTokens.primary[50],*/
            /*},*/
            /*neutral: {*/
              /*dark: colorTokens.grey[700],*/
              /*main: colorTokens.grey[500],*/
              /*mediumMain: colorTokens.grey[400],*/
              /*medium: colorTokens.grey[300],*/
              /*light: colorTokens.grey[50],*/
            /*},*/
            /*background: {*/
              /*default: colorTokens.grey[10],*/
              /*alt: colorTokens.grey[0],*/
            /*},*/
          
    ,
    typography: {
      fontFamily: ["Maven Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Maven pro","Rubik", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Maven Pro","Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: [ "Maven Pro", "Rubik", "sans-serif"].join(","),
        fontSize: 28,
      },
      h4: {
        fontFamily: ["Maven Pro","Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      subtitle1: {
        fontFamily: ["Poppins","Rubik", "sans-serif"].join(","),
        fontSize: 18,
      },
      subtitle2: {
        fontFamily: ["Poppins","Rubik", "sans-serif"].join(","),
        fontSize: 16,
	  },
		body1: {
        fontFamily: ["Poppins","Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
