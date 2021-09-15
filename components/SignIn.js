/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

const USERS = ['redbarn'];

// `linear-gradient(
//                 320deg,
//                 #f0555a 0%,
//                 #dc335a 50%,
//                 #bb1b5d 100%
//               );`,

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: '#ff005e',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: `#ff005e`,
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',

    '& fieldset': {
      borderColor: 'grey',
      // borderColor: `linear-gradient(320deg,#f0555a 0%, #dc335a 50%, #bb1b5d 100%)`,
    },
    '&:hover fieldset': {
      borderColor: '#ff005e', //`linear-gradient(320deg,#f0555a 0%, #dc335a 50%, #bb1b5d 100%)`,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff005e',
    },
  },
});

export default function SignIn(props) {
  const { onSignin } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (USERS.includes(data.get('username'))) {
      onSignin();
    }
  };
  const theme = useTheme();
  return (
    <Container
      maxWidth="xs"
      sx={{
        background: '#070707',
        minWidth: '100%',
        minHeight: '100%',
      }}
    >
      <Box
        sx={{
          color: 'white',
          paddingTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <CssTextField
            margin="normal"
            fullWidth
            id="LandingPageGate-usernameInputField"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <Button
            id="LandingPageGate-signInButton"
            type="submit"
            fullWidth
            variant="contained"
            css={css`
              background-color: #ff425e;
              background: linear-gradient(
                320deg,
                #f0555a 0%,
                #dc335a 50%,
                #bb1b5d 100%
              );
            `}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
