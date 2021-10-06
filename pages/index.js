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
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles } from '@mui/material/styles';
import { useTheme, styled } from '@mui/material/styles';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';

// Custom
import GlobalContext from '../state/globalContext';
import SignIn from '../components/SignIn';
import HeaderLinks from '../components/HeaderLinks';
import NewRelicSnippet from '../components/NewRelicSnippet';
import { grey } from '@mui/material/colors';
import Footer from '../components/Footer';
import CustomTextField, { CustomButton } from '../components/CustomTextField';
import { FOOTER_TOP, HYPER_PINK } from '../src/colors';
import SectionAnchorTarget from '../components/SectionAnchorTarget';
import PricingSection from '../components/PricingSection';
import FeaturesSection from '../components/FeaturesSection';
import MoreFeaturesSection from '../components/MoreFeaturesSection';
import VideoSection from '../components/VideoSection';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Header from '../components/Header';
import sectionStyles from '../styles/sectionStyles';
import StudioIcon from '../components/Icons/StudioIcon';
import UserIcon from '../components/Icons/UserIcon';

const VIEW_CONTEXT = process.env.VIEW_CONTEXT;

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
    accordianTitle: 'Plan includes:',
    headerIcon: <UserIcon width={50} height={50} />,
    price: 'FREE',
    priceDetails: 'for 1 user',
    priceExtraDetails: 'Free forever',
    subheader: 'Standard tier description.',
    theme: 'HYPER_PINK',
    title: 'Core',
    features: [
      'Online booking and appointment scheduling',
      'Deposit and waiver processing',
      'Online and in-store payments',
      'Client reminders and notifications',
      'Mobile, tablet, and desktop compatibility',
      'Business insights',
      'Client messaging',
      'Custom artist hyperlink',
    ],
    buttonText: 'Start Core for FREE',
    buttonVariant: 'outlined',
  },
  {
    accordianTitle: 'Includes CORE features plus:',
    headerIcon: <StudioIcon width={50} height={50} />,
    price: '40',
    priceDetails: 'per month for 2 users',
    priceExtraDetails: '$15 for each additional set',
    subheader: 'Premium tier description.',
    title: 'Studio Edition',
    useCurrencySymbol: true,
    features: [
      'Multiple artist management',
      'Payment tracking',
      'Automatic revenue splitting',
      'Manager and delegate profiles for studio admins',
    ],
    buttonText: 'Upgrade to Studio Edition',
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

if (process.env.ENABLE_OBSERVABILITY !== 'true') {
  console.log('Observability disabled. Enable with env.ENABLE_OBSERVABILITY');
}

console.log('env.VIEW_CONTEXT:', process.env.VIEW_CONTEXT);

const VIEW_AS_RECRUITMENT_PAGE = VIEW_CONTEXT === 'JOIN';
const FOOTER_TOP_GRADIENT_COLOR = VIEW_AS_RECRUITMENT_PAGE
  ? '#000000'
  : FOOTER_TOP;

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
          <HeroSection />
          {!VIEW_AS_RECRUITMENT_PAGE && <DescriptionSection />}
          {!VIEW_AS_RECRUITMENT_PAGE && <VideoSection />}
          <FeaturesSection />
          <MoreFeaturesSection />
          {!VIEW_AS_RECRUITMENT_PAGE && <PricingSection tiers={tiers} />}
          <Footer topGradientColor={FOOTER_TOP_GRADIENT_COLOR} />
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
