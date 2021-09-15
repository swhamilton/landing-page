/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import React, { useContext } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Hidden from '@mui/material/Hidden';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles } from '@mui/material/styles';
import { useTheme, styled } from '@mui/material/styles';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import GlobalContext from '../state/globalContext';
import SignIn from '../components/SignIn';
import HeaderLinks from '../components/HeaderLinks';
import NewRelicSnippet from '../components/NewRelicSnippet';
import { grey } from '@mui/material/colors';
import Footer from '../components/Footer';
import CustomTextField from '../components/CustomTextField';

const HYPER_PINK = '#ed0c6f';

const HeroSection = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        display: 'flex',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '1600px',
        alignItems: 'center',
        backgroundImage:
          '-o-linear-gradient(24deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0) 100%),url(/assets/img/bg_desktop60.jpg)',
        backgroundImage:
          'linear-gradient(66deg,rgba(0,0,0,.85),rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0)),url(/assets/img/bg_desktop60.jpg)',
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
          paddingLeft: '15px',
          paddingRight: '15px',
          '@media (min-width: 600px)': {
            maxWidth: '960px',
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
          Reservations and <br />
          Payments Software
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: '3rem',
            fontSize: '1.8rem',
            '@media (max-width: 600px)': {
              fontSize: '1.4rem',
            },
          }}
        >
          for Tattoo Artists &amp; Studios
        </Typography>
        <CustomTextField
          submitButtonText="Start for Free"
          placeholder="Email address"
          style={{ width: 30 }}
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
      </Box>
    </Box>
  );
};

const HeaderUnderline = () => (
  <hr
    css={css`
      width: 120px;
      border: none;
      border-top: 3px solid ${HYPER_PINK};
      margin-bottom: 1rem;
    `}
  />
);

const sectionHeaderStyles = {
  headerContainer: {
    color: 'white',
  },
  header: {
    marginBottom: '1rem',
    fontSize: '3rem',
    fontWeight: '400',
    lineHeight: '3.5rem',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
  },
  subtitle: {
    '@media (max-width: 600px)': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
};

const SectionHeader = (props) => {
  return (
    <Box sx={sectionHeaderStyles.headerContainer} id={props.id} mb={6}>
      <Typography variant="h2" sx={sectionHeaderStyles.header}>
        {props.title}
      </Typography>
      <HeaderUnderline />
      <Typography sx={sectionHeaderStyles.subtitle} variant="subtitle1">
        {props.subtitle1}
      </Typography>
      <Typography sx={sectionHeaderStyles.subtitle} variant="subtitle1">
        {props.subtitle2}
      </Typography>
    </Box>
  );
};

const DescriptionSection = () => {
  return (
    <Box component="section" sx={styles.sectionContainer}>
      <Box id="details.contentContainer" sx={styles.sectionContentContainer}>
        <SectionHeader
          title="What is HyperTattoo?"
          subtitle1={'The only reservations and payments tool you need.'}
          subtitle2={
            'Replaces email, Instagram, Facebook, and website management for tattoo artists and studios.'
          }
        />

        <Box>
          <Paper elevation={0} sx={{ background: '#f3f3f3', padding: '1rem' }}>
            <FormatQuoteIcon style={{ fontSize: 50 }} />
            <Typography variant="subtitle1">
              HyperTattoo <strong>saves me over 15% in monthly expenses</strong>{' '}
              as well as countless hours in weekly bookkeeping. I now have more
              time to <strong>focus on upcoming projects.</strong>
            </Typography>
            <Typography variant="subtitle1">
              - Izzy Williams,{' '}
              <i>
                <strong>Lightning Studio</strong>
              </i>
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  sectionContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  sectionContentContainer: {
    fontSize: '22.4px',
    fontSize: '1.4rem',
    lineHeight: '28.8px',
    lineHeight: '1.8rem',
    padding: '4rem 16px',
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
    mainContainer: {
      overflowX: 'hidden',
      minHeight: 'calc(100vh - 50px)',
      width: '100%',
    },
  },
  pricingButton: { padding: 2, fontSize: '1rem', textTransform: 'none' },
};

const tiers = [
  {
    title: 'Standard',
    theme: 'HYPER_PINK',
    subheader: 'Standard tier description.',
    price: '0',
    priceDescription: 'Free forever',
    features: [
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Premium',
    subheader: 'Premium tier description.',
    price: '29.99',
    priceDescription: 'Save $60 when billed annually',
    features: [
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

const ColorButton = styled(Button)(({ theme }) => {
  return {
    textTransform: 'none',
    backgroundColor: theme.palette.common.black,
    '&:hover': {
      backgroundColor: grey[900],
    },
  };
});

const videoStyles = {
  detailsCard: {
    textAlign: 'left',
    paddingRight: 4,
    marginBottom: 8,
  },
  detailsCardHeader: {
    fontWeight: '500',
  },
};

const SectionAnchorTarget = (props) => (
  <div
    css={css`
      position: relative;
      display: inline-block;
      top: -40px;
      height: 0;
    `}
    {...props}
  />
);

const VideoSection = (props) => {
  return (
    <Box
      id="features"
      component="section"
      sx={{
        ...styles.sectionContainer,
        backgroundColor: '#111111',
        color: 'white',
      }}
    >
      <SectionAnchorTarget id="features-target" />
      <Box
        id="videoSection.contentContainer"
        sx={styles.sectionContentContainer}
      >
        <SectionHeader title="Inspired functionality" />
        <Box
          display="flex"
          mb={6}
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
              height: '520px',
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
        <Grid container>
          <Grid item sm={4} sx={videoStyles.detailsCard}>
            <Typography
              sx={videoStyles.detailsCardHeader}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Artist profiles
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              distinctio dolore laborum at a minima aperiam.
            </Typography>
          </Grid>
          <Grid item sm={4} sx={videoStyles.detailsCard}>
            <Typography
              sx={videoStyles.detailsCardHeader}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Direct messaging
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              distinctio dolore laborum at a minima aperiam.
            </Typography>
          </Grid>
          <Grid item sm={4} sx={videoStyles.detailsCard}>
            <Typography
              sx={videoStyles.detailsCardHeader}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Scheduling
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              distinctio dolore laborum at a minima aperiam.
            </Typography>
          </Grid>
          <Grid item sm={4} sx={videoStyles.detailsCard}>
            <Typography
              sx={videoStyles.detailsCardHeader}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Payment processing
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              distinctio dolore laborum at a minima aperiam.
            </Typography>
          </Grid>
          <Grid item sm={4} sx={videoStyles.detailsCard}>
            <Typography
              sx={videoStyles.detailsCardHeader}
              component="h3"
              variant="h5"
              gutterBottom
            >
              Business insights
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              distinctio dolore laborum at a minima aperiam.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const PricingSection = (props) => {
  return (
    <Box id="pricing" component="section" sx={styles.sectionContainer}>
      <SectionAnchorTarget id="pricing-target" />
      <Box
        id="pricingSection.contentContainer"
        sx={styles.sectionContentContainer}
      >
        <SectionHeader
          title="Account Types"
          subtitle1={'Pick the plan that fits your business.'}
        />

        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier, tierIndex) => {
              const useHyperPink = tier.theme === 'HYPER_PINK';
              return (
                <Grid item key={tier.title} xs={12} sm={6} md={6}>
                  <Card
                    sx={{
                      border: (theme) =>
                        `2px solid ${
                          useHyperPink ? HYPER_PINK : theme.palette.grey[800]
                        }`,
                      borderRadius: 3,
                    }}
                  >
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'left' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      subheaderTypographyProps={{
                        marginTop: 2,
                        align: 'left',
                      }}
                      sx={{
                        color: (theme) =>
                          useHyperPink ? HYPER_PINK : theme.palette.grey[800],
                      }}
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'baseline',
                          mb: 2,
                        }}
                      >
                        <Typography
                          component="h2"
                          variant="h4"
                          textAlign="left"
                          color="text.primary"
                        >
                          ${tier.price}
                        </Typography>
                        <Typography variant="subtitle1" color="grey.800" ml={1}>
                          per user/mo.
                        </Typography>
                      </Box>
                      <ul>
                        {tier.features.map((line, featureIndex) => (
                          <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            key={`tier${tierIndex}-featureIndex${featureIndex}`}
                          >
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      {useHyperPink ? (
                        <Button
                          id="LandingPage-rightPricingButton"
                          sx={styles.pricingButton}
                          fullWidth
                          variant={tier.buttonVariant}
                        >
                          {tier.buttonText}
                        </Button>
                      ) : (
                        <ColorButton
                          id="LandingPage-leftPricingButton"
                          sx={styles.pricingButton}
                          fullWidth
                          variant="contained"
                        >
                          {tier.buttonText}
                        </ColorButton>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const defaultFont = {
  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const headerStyles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      padding: '0',
    },
  },
  flex: {
    flex: 1,
  },
  appResponsive: {
    margin: '20px 10px',
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  transparent: 'transparent-bg',
  black: 'black-bg',
};

const PREFIX = 'Header';
const classes = {
  root: `${PREFIX}-root`,
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

// TODO: abstract to utils
const scrollToId = (id) => (e) => {
  e.preventDefault();
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const BrandComponent = () => {
  return (
    <Box
      onClick={scrollToId('home')}
      component="a"
      display="flex"
      flexDirection="column"
      sx={{
        textAlign: 'right',
        width: '180px',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', width: '180px', height: '40px' }}>
        <Image
          alt="Logo"
          src={
            '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
          }
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* <Hidden smDown>
        <Box display="flex" justifyContent="flex-end">
          <Typography
            sx={{ fontSize: '0.8rem', color: 'white' }}
            component="div"
          >
            Inspired. Always.
          </Typography>

          <Typography
            sx={{ fontSize: '5px', color: '#dcdcdc' }}
            variant="subtitle2"
            component="span"
          >
            TM
          </Typography>
        </Box>
      </Hidden> */}
    </Box>
  );
};

const Header = (props) => {
  const { brand, rightLinks, color, changeColorOnScroll } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgColor, setBGColor] = React.useState(color);

  // Bind a scroll listener to change header background
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  let backgroundColorClass = headerStyles[color];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // TODO: Research better perf methods, possibly without state
  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      // Color
      backgroundColorClass = changeColorOnScroll.color;
    } else {
      // Transparent
      backgroundColorClass = color;
    }
    setBGColor(backgroundColorClass);
  };
  const leftLinks = undefined;

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: bgColor }}
      sx={{
        transition: '0.2s',
        padding: '0.1rem 1.3rem',
        boxShadow: 'none',
        '@media (max-width: 600px)': {
          padding: '0 0.6em',
        },
      }}
    >
      <Toolbar sx={headerStyles.toolbar}>
        <BrandComponent />
        {rightLinks}
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          <Box sx={headerStyles.appResponsive}>
            {leftLinks}
            {rightLinks}
          </Box>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

if (process.env.ENABLE_OBSERVABILITY !== 'true') {
  console.log('Observability disabled. Enable with env.ENABLE_OBSERVABILITY');
}

export function Index() {
  const { isLoggedIn, update } = useContext(GlobalContext);
  return (
    <Box
      sx={{
        minWidth: '100%',
        height: '100vh',
      }}
    >
      {process.env.ENABLE_OBSERVABILITY === 'true' && <NewRelicSnippet />}
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />

      <Global
        styles={css`
          .homeHero {
            @media (min-width: 600px) {
              padding: 80px 0;
            }
            border: 2px solid blue;
          }
        `}
      />
      {isLoggedIn || process.env.TEST_MODE === 'true' ? (
        <Box id="home" component="main" sx={styles.mainContainer}>
          <Header
            color="transparent"
            brand="Brand text here"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 100, // Controls the scroll height when this style applies
              color: 'black',
            }}
          />
          <HeroSection classes="homeHero" />
          <DescriptionSection />
          <VideoSection />
          <PricingSection />
          <Footer />
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
