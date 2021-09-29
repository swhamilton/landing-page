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
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
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
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

// Custom
import GlobalContext from '../state/globalContext';
import SignIn from '../components/SignIn';
import HeaderLinks from '../components/HeaderLinks';
import NewRelicSnippet from '../components/NewRelicSnippet';
import { grey } from '@mui/material/colors';
import Footer from '../components/Footer';
import CustomTextField, { CustomButton } from '../components/CustomTextField';
import { HYPER_PINK } from '../src/colors';
import SectionAnchorTarget from '../components/SectionAnchorTarget';
import PricingSection from '../components/PricingSection';
import FeaturesSection from '../components/FeaturesSection';
import MoreFeaturesSection from '../components/MoreFeaturesSection';
import SectionHeader from '../components/SectionHeader';
import sectionStyles from '../styles/sectionStyles';
import StudioIcon from '../components/StudioIcon';
import UserIcon from '../components/UserIcon';

const heroStyles = {
  listItem: {
    fontSize: '1.5rem',
    display: 'list-item',
    '@media (max-width: 600px)': {
      paddingTop: '0',
      paddingBottom: '0',
    },
  },
  listItemText: {
    fontSize: '1.5rem',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
};

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
        {/* No Bullets here, save for somewhere else */}
        {/* <Box mb={5}>
          <List sx={{ listStyleType: 'disc', ml: 3 }}>
            <ListItem sx={heroStyles.listItem}>
              <ListItemText
                primaryTypographyProps={{ sx: heroStyles.listItemText }}
              >
                Project management
              </ListItemText>
            </ListItem>
            <ListItem sx={heroStyles.listItem}>
              <ListItemText
                primaryTypographyProps={{ sx: heroStyles.listItemText }}
              >
                Simplified scheduling
              </ListItemText>
            </ListItem>
            <ListItem sx={heroStyles.listItem}>
              <ListItemText
                primaryTypographyProps={{ sx: heroStyles.listItemText }}
              >
                Cash or card payments
              </ListItemText>
            </ListItem>
          </List>
        </Box> */}

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

const QuoteCard = () => {
  <Box>
    <Paper elevation={0} sx={{ background: '#f3f3f3', padding: '1rem' }}>
      <FormatQuoteIcon style={{ fontSize: 50 }} />
      <Typography variant="subtitle1">
        HyperTattoo <strong>saves me over 15% in monthly expenses</strong> as
        well as countless hours in weekly bookkeeping. I now have more time to{' '}
        <strong>focus on upcoming projects.</strong>
      </Typography>
      <Typography variant="subtitle1">
        - Izzy Williams,{' '}
        <i>
          <strong>Lightning Studio</strong>
        </i>
      </Typography>
    </Paper>
  </Box>;
};

const DescriptionSection = () => {
  return (
    <Box component="section" sx={sectionStyles.sectionContainer}>
      <Box
        id="details.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <SectionHeader title="" subtitle1={'What is HyperTattoo?'} />
      </Box>
    </Box>
  );
};

const styles = {
  mainContainer: {
    overflowX: 'hidden',
    minHeight: 'calc(100vh - 50px)',
    width: '100%',
  },
};

const tiers = [
  {
    accordianTitle: 'Core Features',
    headerIcon: <UserIcon width={50} height={50} />,
    price: 'FREE',
    priceDetails: 'for 1 user',
    priceExtraDetails: 'Free forever',
    subheader: 'Standard tier description.',
    theme: 'HYPER_PINK',
    title: 'Core',
    features: [
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
    ],
    buttonText: 'Get started for free with Core',
    buttonVariant: 'outlined',
  },
  {
    accordianTitle: 'Studio Edition Features',
    headerIcon: <StudioIcon width={50} height={50} />,
    price: '40',
    priceDetails: 'per month for 2 users',
    priceExtraDetails: '$15 for each additional set',
    subheader: 'Premium tier description.',
    title: 'Studio Edition',
    useCurrencySymbol: true,
    features: [
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
      'Feature 1',
    ],
    buttonText: 'Upgrade with Studio Edition',
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

const VideoSection = (props) => {
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
        {/* <Grid container>
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
              Share your business details, social pages, and showcase work in a
              custom gallery.
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
              Collaborate on designs, negotiate payments, and stay in touch with
              customers in one place.
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
              Accept or decline appointments online. Set availability on the
              HyperTattoo calendar so you only get reservations when you’re able
              to work.
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
              Set custom rates, collect deposits before sessions, and close out
              balances with either card or cash.
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
              Track your revenue and monitor upcoming projects in one
              easy-to-use dashboard.
            </Typography>
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

const defaultFont = {
  fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
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
              height: 60, // Controls the scroll height when this style applies
              color: 'black',
            }}
          />
          <HeroSection classes="homeHero" />
          <DescriptionSection />
          <VideoSection />
          <FeaturesSection />
          <MoreFeaturesSection />
          <PricingSection tiers={tiers} />
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
