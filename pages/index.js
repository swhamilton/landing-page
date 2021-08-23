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

const HeroSection = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  return (
    <section
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      <div>This is the Section</div>
    </section>
  );
};

export function Index() {
  return (
    <Box sx={{ minWidth: '100%' }}>
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
      <Box
        sx={{
          border: '2px solid red',
          minHeight: 'calc(100vh - 50px)',
          width: '100%',
        }}
      >
        <HeroSection classes="homeHero" />
      </Box>
    </Box>
  );
}
export default Index;
