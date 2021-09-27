import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';

const styles = {
  detailsCard: {
    textAlign: 'left',
    paddingRight: 4,
    marginBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
  detailsCardHeader: {
    fontWeight: '500',
  },
};

const MoreFeaturesSection = (props) => {
  return (
    <Container maxWidth="xl">
      <Box
        id="more-features"
        component="section"
        sx={{
          ...sectionStyles.sectionContainer,
          color: 'white',
        }}
      >
        <SectionAnchorTarget id="more-features-target" />
        <SectionHeader
          title="Software"
          subtitle1="Built by the tattoo industry,"
          subtitle2="by the tattoo industry."
        />
        <Typography
          sx={{ fontSize: '1.3rem', mb: 5 }}
          variant="body1"
          gutterBottom
        >
          {`We believe the tattoo industry shouldn't have to conform to
            other industry solutions for payments and scheduling.`}
        </Typography>

        <Grid container spacing={0}>
          <Grid item sm={4} sx={styles.detailsCard}>
            <Typography
              sx={styles.detailsCardHeader}
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
          <Grid item sm={4} sx={styles.detailsCard}>
            <Typography
              sx={styles.detailsCardHeader}
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
          <Grid item sm={4} sx={styles.detailsCard}>
            <Typography
              sx={styles.detailsCardHeader}
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
          <Grid item sm={4} sx={styles.detailsCard}>
            <Typography
              sx={styles.detailsCardHeader}
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
          <Grid item sm={4} sx={styles.detailsCard}>
            <Typography
              sx={styles.detailsCardHeader}
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
        </Grid>
        <Box
          sx={{
            background: 'radial-gradient(circle at 50%, #141414 7%, black 75%)',
          }}
        >
          <Image
            src={'/assets/img/artist_carousel_1300x702.png'}
            alt="Phones"
            width={900}
            height={500}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MoreFeaturesSection;
