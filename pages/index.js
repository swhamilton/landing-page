/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/react';
import * as React from 'react';
import GlobalStyles from '@material-ui/core/GlobalStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Stack from '@material-ui/core/Stack';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createStyles } from '@material-ui/core/styles';
import { useTheme, styled } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StarIcon from '@material-ui/icons/Star';
import { useContext } from 'react';
import Image from 'next/image';
import GlobalContext from '../state/globalContext';
import SignIn from '../components/SignIn';
import NewRelicSnippet from '../components/NewRelicSnippet';
import { grey } from '@material-ui/core/colors';

const HYPER_PINK = '#ed0c6f';

const HeroSection = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const { classes } = props;
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        border: '2px solid red',
        display: 'flex',
        padding: '0',
        overflow: 'hidden',
        position: 'relative',
        maxHeight: '1600px',
        alignItems: 'center',
        backgroundImage:
          '-o-linear-gradient(24deg,rgba(0,0,0,.85) 0,rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0) 100%),url(/assets/img/bg_desktop.jpeg)',
        backgroundImage:
          'linear-gradient(66deg,rgba(0,0,0,.85),rgba(0,0,0,.7) 25%,rgba(0,0,0,.3) 50%,rgba(0,0,0,.1) 75%,rgba(0,0,0,0)),url(/assets/img/bg_desktop.jpeg)',
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
          variant="h1"
          sx={{
            marginBottom: '3rem',
            fontSize: '3rem',
            lineHeight: '3.5rem',
            fontWeight: '700',
          }}
        >
          Reservations and payments software for tattoo artists and studios
        </Typography>
        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              css={css`
                font-size: 1rem;
                padding: 0.6em 2.5em;
                text-transform: none;
                background-color: #ff425e;
                background: linear-gradient(
                  320deg,
                  #f0555a 0%,
                  #dc335a 50%,
                  #bb1b5d 100%
                );
              `}
            >
              Get started
            </Button>
            <Button
              disableRipple
              disableFocusRipple
              variant="text"
              sx={{
                color: '#c3bd02',
                padding: '0.6em 2em',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  color: '#ffd600',
                },
              }}
              size="large"
              endIcon={<PlayCircleOutlineIcon style={{ fontSize: '2rem' }} />}
            >
              Watch the video
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const HeaderUnderline = () => (
  <hr
    css={css`
      width: 120px;
      border-top: 3px solid ${HYPER_PINK};
      margin-bottom: 1rem;
    `}
  />
);

const SectionHeader = (props) => {
  return (
    <Box mb={6}>
      <Typography
        variant="h2"
        sx={{
          marginBottom: '1rem',
          fontSize: '3rem',
          lineHeight: '3.5rem',
          fontWeight: '400',
        }}
      >
        {props.title}
      </Typography>
      <HeaderUnderline />
      <Typography variant="subtitle1">{props.subtitle1}</Typography>
      <Typography variant="subtitle1">{props.subtitle2}</Typography>
    </Box>
  );
};

const DescriptionSection = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        border: '2px solid green',
        display: 'flex',
        // padding: '0',
        // overflow: 'hidden',
        // position: 'relative',
        alignItems: 'center',
      }}
    >
      <Box
        id="details.contentContainer"
        sx={{
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
        }}
      >
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

const PricingSection = (props) => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        border: '2px solid green',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        id="pricingSection.contentContainer"
        sx={{
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
        }}
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
                          sx={styles.pricingButton}
                          fullWidth
                          variant={tier.buttonVariant}
                        >
                          {tier.buttonText}
                        </Button>
                      ) : (
                        <ColorButton
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

const Header = (props) => {
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

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        padding: '1em 1.3em',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <div style={{ textAlign: 'right', width: '220px' }}>
        <div style={{ position: 'relative', width: '220px', height: '40px' }}>
          <Image
            alt="Logo"
            src={
              '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
            }
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Box display="flex" justifyContent="flex-end">
          <Typography component="div">Inspired. Always.</Typography>
          <Typography
            sx={{ fontSize: '5px', color: '#dcdcdc' }}
            variant="subtitle2"
            component="span"
          >
            TM
          </Typography>
        </Box>
      </div>
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
      {isLoggedIn || process.env.TEST_MODE === 'true' ? (
        <Box
          component="main"
          sx={{
            overflowX: 'hidden',
            border: '2px solid red',
            minHeight: 'calc(100vh - 50px)',
            width: '100%',
          }}
        >
          <Header />
          <HeroSection classes="homeHero" />
          <DescriptionSection />
          <PricingSection />
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
