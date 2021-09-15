import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

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
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 5,
        },
        mb: 3,
      }}
    >
      <Link href="#" underline="hover">
        FAQ
      </Link>
      <Link href="#" underline="hover">
        Privacy
      </Link>
      <Link href="#" underline="hover">
        Policy
      </Link>
      <Link href="#" underline="hover">
        Legal
      </Link>
      <Link href="#" underline="hover">
        INST
      </Link>
      <Link href="#" underline="hover">
        FB
      </Link>
      <Link href="#" underline="hover">
        IN
      </Link>
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
          <Box m={2}>
            <Image
              src={
                '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
              }
              alt="HyperLogo"
              width={200}
              height={36}
            />
          </Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
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
