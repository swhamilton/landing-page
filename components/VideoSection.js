import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionAnchorTarget from './SectionAnchorTarget';
import sectionStyles from '../styles/sectionStyles';

export const VideoSection = (props) => {
  return (
    <Box
      id="video"
      component="section"
      sx={{
        ...sectionStyles.sectionContainer,
        background: 'linear-gradient(black, #111)',
        color: 'white',
        '@media (min-width: 900px)': {
          padding: '4rem',
          paddingTop: '0',
        },
        paddingTop: '0',
      }}
    >
      <Box
        id="videoSection.contentContainer"
        sx={{
          ...sectionStyles.sectionContentContainer,
          p: 0,
          pt: 0,
          pb: 0,
          mb: 0,
          '@media (max-width: 600px)': {
            paddingTop: '0',
            paddingBottom: '0',
            background: 'black',
          },
        }}
      >
        <SectionAnchorTarget id="video-target" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            '@media (min-width: 320px)': {
              height: '200px',
            },
            '@media (min-width: 400px)': {
              height: '300px',
            },
            '@media (min-width: 600px)': {
              height: '380px',
            },
            '@media (min-width: 780px)': {
              height: '500px',
            },
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/554786369?autoplay=1&muted=1"
            width="100%"
            style={{ minHeight: '100%' }}
            frameBorder="0"
            // allow="autoplay; fullscreen"
            allowFullScreen
            // webkitallowFullScreen
            // mozallowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoSection;
