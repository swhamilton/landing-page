/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import * as React from 'react';
import { alpha, styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';

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
      borderColor: 'gray',
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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (USERS.includes(data.get('username'))) {
      alert('IN!');
    }
  };
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
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
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <Button
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
