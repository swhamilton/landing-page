import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import CustomTextField, { CustomButton } from '../components/CustomTextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

const MENDIX_URL = 'http://demo.hypertattoo.com/link/homepage';

const HeroSection = (props) => {
  const [email, setEmail] = React.useState('');
  const handleOnChange = (e) => {
    setEmail((e.target.value || '').toLowerCase());
  };
  const handleOnSubmit = (e) => {
    window.location = `${MENDIX_URL}/${encodeURIComponent(email)}`;
  };

  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  const emailSignUpButtonText = matches ? 'Start for Free' : 'Start';
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        display: 'flex',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        alignItems: 'center',
        maxHeight: '1600px',
        backgroundImage: `
          -o-linear-gradient(
            180deg,
            rgba(0,0,0,.85),
            rgba(0,0,0,.3) 25%,
            rgba(0,0,0,.2) 50%,
            rgba(0,0,0,.1) 75%,
            rgba(0,0,0,0) 100%),
          url(/assets/img/bg_desktop60.jpg)`,
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(0,0,0,.85),
            rgba(0,0,0,.3) 25%,
            rgba(0,0,0,.2) 50%,
            rgba(0,0,0,.1) 75%,
            rgba(0,0,0,0) 100%),
          url(/assets/img/bg_desktop60.jpg)`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        height: '78vh',
        backgroundPosition: 'center top',
        '@media (max-width: 600px)': {
          marginTop: '60px',
          height: '70vh',
        },
      }}
    >
      <Box
        id="heroSection.contentContainer"
        sx={{
          textAlign: 'left',
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
          marginTop: '1rem',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@media (min-width: 600px)': {
            maxWidth: '1280px',
          },
          '@media (max-width: 600px)': {
            marginTop: '3.5rem',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: '1rem',
            fontWeight: '600',
            '@media (max-width: 600px)': {
              fontSize: '2.5rem',
              lineHeight: '2.5rem',
            },
          }}
        >
          Reservations
          <br />
          &amp; Payments
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: '2rem',
            fontSize: '1.8rem',
            '@media (max-width: 600px)': {
              fontSize: '1.4rem',
            },
          }}
        >
          Software for Tattoo Artists
        </Typography>
        <Hidden smDown>
          <CustomTextField
            onChange={handleOnChange}
            onButtonClick={handleOnSubmit}
            useButton
            buttonText="Start for Free"
            placeholder="Email address"
            textFieldStyles={{
              minWidth: '33rem',
              '@media (max-width: 600px)': {
                minWidth: '100%',
              },
            }}
            inputFieldStyles={{
              '@media (max-width: 600px)': {
                width: '100%',
              },
            }}
            buttonStyles={{
              minWidth: '12rem',
              fontSize: '1.2rem',
              padding: '0.7rem 0',
            }}
            buttonIcon={<ArrowForwardIosIcon />}
          />
        </Hidden>
        <Hidden smUp>
          <Box
            sx={{
              '@media (max-width: 600px)': {
                marginTop: '5rem',
              },
            }}
          >
            <CustomTextField
              onChange={handleOnChange}
              placeholder="Email address"
              textFieldStyles={{
                minWidth: '100%',
                marginBottom: 2,
              }}
              inputFieldStyles={{
                width: '100%',
              }}
            />
            <CustomButton
              onClick={handleOnSubmit}
              buttonIcon={<ArrowForwardIosIcon />}
              fullWidth
              buttonText="Start for Free"
            />
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default HeroSection;
