import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckIcon from '@mui/icons-material/Check';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';

const styles = {
  detailsCard: {
    textAlign: 'left',
    marginBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
  },
  detailsCardHeader: {
    fontWeight: '600',
    fontSize: '1.1rem',
    lineHeight: '1.1rem',
  },
};

const MoreFeaturesSection = (props) => {
  const matches = useMediaQuery('(max-width:600px)');
  const imgSrc = matches
    ? '/assets/img/artist_carousel_mobile.png'
    : '/assets/img/artist_carousel_1300x702.png';

  const imgWidth = matches ? 600 : 900;

  return (
    <Container maxWidth="md">
      <Box
        id="more-features"
        component="section"
        sx={{
          ...sectionStyles.sectionContainer,
          color: 'white',
        }}
      >
        <SectionAnchorTarget id="more-features-target" />
        {/* <SectionHeader
          title="Software"
          subtitle1="Built for the tattoo industry,"
          subtitle2="by the tattoo industry."
        /> */}
        {/* <Typography
          sx={{ fontSize: '1.3rem', mb: 5 }}
          variant="body1"
          gutterBottom
        >
          {`We believe the tattoo industry shouldn't have to conform to
            other industry solutions for payments and scheduling.`}
        </Typography> */}

        <Grid container sx={{ mt: 3 }} spacing={0}>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Artist profiles
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              Share your business details, social pages, and showcase work in a
              custom gallery.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Direct messaging
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              Collaborate on designs, negotiate payments, and stay in touch with
              customers in one place.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Scheduling
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              Accept or decline appointments online. Set availability on the
              HyperTattoo calendar so you only get reservations when you’re able
              to work.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Payment processing
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              Set custom rates, collect deposits before sessions, and close out
              balances with either card or cash.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Notifications
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              We notify clients to complete payments and remind them of upcoming
              appointments so you {"don't"} have to.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" alignItems="center">
              <CheckIcon sx={{ mb: '0.5rem', mr: '0.7rem' }} fontSize="small" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Business insights
              </Typography>
            </Box>
            <Typography variant="body1" ml={'2rem'}>
              Track your revenue and monitor upcoming projects in one
              easy-to-use dashboard.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            background: 'radial-gradient(circle at 50%, #141414 7%, black 75%)',
          }}
        >
          <Image src={imgSrc} alt="Phones" width={imgWidth} height={500} />
        </Box>
      </Box>
    </Container>
  );
};

export default MoreFeaturesSection;
