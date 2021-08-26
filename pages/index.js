/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Stack from '@material-ui/core/Stack';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createStyles } from '@material-ui/core/styles';
import { useTheme, styled } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useContext } from 'react';
import Image from 'next/image';
import GlobalContext from '../state/globalContext';
import SignIn from '../components/SignIn';
import NewRelicSnippet from '../components/NewRelicSnippet';

const HeroSection = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        border: '2px solid red',
        display: 'flex',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '1600px',
        alignItems: 'center',
        backgroundImage:
          '-o-linear-gradient(24deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0) 100%),url(/assets/img/bg_desktop.jpeg)',
        backgroundImage:
          'linear-gradient(66deg,rgba(0,0,0,.85),rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0)),url(/assets/img/bg_desktop.jpeg)',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        // Extra
        height: '78vh',
        backgroundPosition: 'center top',
      }}
    >
      <Box
        id="heroSection.contentContainer"
        sx={{
          color: '#fff',
          fontSize: '22.4px',
          fontSize: '1.4rem',
          lineHeight: '28.8px',
          lineHeight: '1.8rem',
          padding: '0 16px',
          width: '100%',
          zIndex: '1',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@media (min-width: 600px)': {
            maxWidth: '960px',
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginBottom: '3rem',
            fontSize: '3rem',
            lineHeight: '3.5rem',
            fontWeight: '700',
          }}
        >
          Reservations and payments software for tattoo artists and studios
        </Typography>
        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              css={css`
                font-size: 1rem;
                padding: 0.6em 2.5em;
                text-transform: none;
                background-color: #ff425e;
                background: linear-gradient(
                  320deg,
                  #f0555a 0%,
                  #dc335a 50%,
                  #bb1b5d 100%
                );
              `}
            >
              Get started
            </Button>
            <Button
              disableRipple
              disableFocusRipple
              variant="text"
              sx={{
                color: '#c3bd02',
                padding: '0.6em 2em',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  color: '#ffd600',
                },
              }}
              size="large"
              endIcon={<PlayCircleOutlineIcon style={{ fontSize: '2rem' }} />}
            >
              Watch the video
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: '1em 1.3em',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <div style={{ textAlign: 'right', width: '220px' }}>
        <div style={{ position: 'relative', width: '220px', height: '40px' }}>
          <Image
            alt="Logo"
            src={
              '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Box display="flex" justifyContent="flex-end">
          <Typography component="div">Inspired. Always.</Typography>
          <Typography
            sx={{ fontSize: '0.4em', color: '#777' }}
            variant="subtitle2"
            component="span"
          >
            TM
          </Typography>
        </Box>
      </div>
    </AppBar>
  );
};

if (!process.env.ENABLE_OBSERVABILITY) {
  console.log('Observability disabled. Enable with env.ENABLE_OBSERVABILITY');
}

export function Index() {
  const { isLoggedIn, update } = useContext(GlobalContext);
  return (
    <Box
      sx={{
        minWidth: '100%',
        height: '100vh',
        bgcolor: '#070707',
      }}
    >
      {process.env.ENABLE_OBSERVABILITY === 'true' && <NewRelicSnippet />}
      {/* <Global
        styles={css`
          .homeHero {
            @media (min-width: 600px) {
              padding: 80px 0;
            }
            border: 2px solid blue;
          }
        `}
      /> */}
      {isLoggedIn || process.env.TEST_MODE ? (
        <Box
          component="main"
          sx={{
            overflowX: 'hidden',
            border: '2px solid red',
            minHeight: 'calc(100vh - 50px)',
            width: '100%',
          }}
        >
          <Header />
          <HeroSection classes="homeHero" />
        </Box>
      ) : (
        <SignIn
          onSignin={() => {
            update({ isLoggedIn: true });
          }}
        />
      )}
    </Box>
  );
}
export default Index;
