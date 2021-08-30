import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
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
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
