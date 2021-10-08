import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';

// @mui/material components
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Custom
import CustomTextField, { CustomButton } from './CustomTextField';
import sectionStyles from '../styles/sectionStyles';
import { FOOTER_TOP, HYPER_DARK_PURPLE, HYPER_PURPLE } from '../src/colors';

const footerStyles = {
  link: {
    color: 'white',
  },
};

const SocialLinks = () => (
  <>
    <Grid item>
      <Link href="#" underline="hover">
        <IconButton aria-label="Instagram">
          <InstagramIcon sx={{ color: 'white' }} fontSize="inherit" />
        </IconButton>
      </Link>
    </Grid>
    <Grid item>
      <Link href="#" underline="hover">
        <IconButton aria-label="Facebook">
          <FacebookIcon sx={{ color: 'white' }} fontSize="inherit" />
        </IconButton>
      </Link>
    </Grid>
    <Grid item>
      <Link href="#" underline="hover">
        <IconButton aria-label="LinkedIn">
          <LinkedInIcon sx={{ color: 'white' }} fontSize="inherit" />
        </IconButton>
      </Link>
    </Grid>
  </>
);
const FooterNavLinks = () => {
  return (
    <Grid
      container
      display="flex"
      spacing={3}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        marginBottom: 3,
      }}
    >
      <Hidden smUp>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <SocialLinks />
        </Grid>
      </Hidden>
      <Grid item>
        <Link sx={footerStyles.link} href="#" underline="hover">
          FAQ
        </Link>
      </Grid>
      <Grid item>
        <Link sx={footerStyles.link} href="#" underline="hover">
          Privacy
        </Link>
      </Grid>
      <Grid item>
        <Link sx={footerStyles.link} href="#" underline="hover">
          Policy
        </Link>
      </Grid>
      <Grid item>
        <Link sx={footerStyles.link} href="#" underline="hover">
          Legal
        </Link>
      </Grid>
      <Hidden smDown>
        <SocialLinks />
      </Hidden>
    </Grid>
  );
};
const Footer = ({ topGradientColor }) => {
  return (
    <Box
      component="section"
      sx={{
        ...sectionStyles.sectionContainer,
        background: `linear-gradient(${topGradientColor}, ${HYPER_DARK_PURPLE}, ${HYPER_PURPLE})`,
        pb: 4,
      }}
    >
      <Box
        id="details.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Box mb={5} sx={{ width: '200px' }}>
              <Image
                src={
                  '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
                }
                alt="HyperLogo"
                width={200}
                height={36}
              />
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  sx={{ fontSize: '0.8rem', color: 'white' }}
                  component="div"
                >
                  Inspired. Always.
                </Typography>
                <Typography
                  sx={{ fontSize: '4px', fontWeight: 400, color: '#dcdcdc' }}
                  variant="subtitle2"
                  component="span"
                >
                  TM
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Sign up for our newsletter
          </Typography>
          <Typography variant="body1">
            We respect your privacy.{' '}
            <Hidden smUp>
              <br />
            </Hidden>
            You can cancel at any time.
          </Typography>

          <Hidden smDown>
            <CustomTextField
              useButton
              textFieldStyles={{
                marginTop: 5,
                marginBottom: 5,
                width: '30rem',
                '@media (max-width: 600px)': {
                  width: '20rem',
                },
              }}
              buttonStyles={{ width: '18rem' }}
              buttonText="Sign Up"
              placeholder="Email address"
            />
          </Hidden>
          <Hidden smUp>
            <CustomTextField
              placeholder="Email address"
              textFieldStyles={{
                minWidth: '100%',
                marginBottom: 2,
                marginTop: 5,
              }}
              inputFieldStyles={{
                width: '100%',
              }}
              buttonStyles={{
                padding: '0.3rem 2rem',
              }}
            />
            <CustomButton
              buttonIcon={<ArrowForwardIosIcon />}
              fullWidth
              styles={{
                fontSize: '1.2rem',
                fontWeight: '600',
                padding: '0.4rem 2rem',
                textTransform: 'none',
                marginBottom: 5,
              }}
              buttonText="Sign Up"
            />
          </Hidden>
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
