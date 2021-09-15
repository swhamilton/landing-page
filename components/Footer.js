import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

// @mui/material components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Custom
import CustomTextField from './CustomTextField';
import sectionStyles from '../styles/sectionStyles';

const footerStyles = {};

const FooterNavLinks = () => {
  return (
    <Box
      sx={{
        color: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 5,
        },
        mb: 3,
      }}
    >
      <Link sx={{ color: 'white' }} href="#" underline="hover">
        FAQ
      </Link>
      <Link sx={{ color: 'white' }} href="#" underline="hover">
        Privacy
      </Link>
      <Link sx={{ color: 'white' }} href="#" underline="hover">
        Policy
      </Link>
      <Link sx={{ color: 'white' }} href="#" underline="hover">
        Legal
      </Link>
      <Box>
        <Link href="#" underline="hover">
          <IconButton sx={{ marginRight: 1 }} aria-label="Instagram">
            <InstagramIcon sx={{ color: 'white' }} fontSize="inherit" />
          </IconButton>
        </Link>
        <Link href="#" underline="hover">
          <IconButton sx={{ marginRight: 1 }} aria-label="Facebook">
            <FacebookIcon sx={{ color: 'white' }} fontSize="inherit" />
          </IconButton>
        </Link>
        <Link href="#" underline="hover">
          <IconButton sx={{ marginRight: 1 }} aria-label="LinkedIn">
            <LinkedInIcon sx={{ color: 'white' }} fontSize="inherit" />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};
const Footer = () => {
  return (
    <Box component="section" sx={sectionStyles.sectionContainer}>
      <Box
        id="details.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <Box>
          <Box m={3}>
            <Image
              src={
                '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
              }
              alt="HyperLogo"
              width={200}
              height={36}
            />
          </Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Sign up for our newsletter
          </Typography>
          <Typography variant="body1">
            We respect your privacy. You can cancel at any time.
          </Typography>
          <CustomTextField />
          <FooterNavLinks />
          <Typography variant="body1">
            © 2021 HyperTattoo. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
