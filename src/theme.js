import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

export const defaultHeaderFont = {
  fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
  fontWeight: '600',
  lineHeight: '1em',
};

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Inter',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle1: {
      fontSize: '1em',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          // background: red;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#ef4059',
    },
    // secondary: {
    //   main: grey[50],
    // },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
