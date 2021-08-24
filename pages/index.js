/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createStyles } from '@material-ui/core/styles';
import { useTheme, styled } from '@material-ui/core/styles';
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';

import SignIn from '../components/SignIn';
const HeroSection = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      <div>This is the Section</div>
    </Box>
  );
};

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
      {isLoggedIn ? (
        <Box
          component="main"
          sx={{
            border: '2px solid red',
            minHeight: 'calc(100vh - 50px)',
            width: '100%',
          }}
        >
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
