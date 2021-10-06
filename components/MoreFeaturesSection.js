import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { grey } from '@mui/material/colors';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';
import { HYPER_PINK } from '../src/colors';

const styles = {
  detailsCard: {
    textAlign: 'left',
    marginBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
  },
  detailsCardHeader: {
    fontWeight: '600',
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
  },
  detailsCardText: {
    color: grey[300],
  },
  icon: { mb: '0.5rem', mr: '0.7rem', color: HYPER_PINK },
};

const MoreFeaturesSection = (props) => {
  const matches = useMediaQuery('(max-width:600px)');
  const imgSrc = matches
    ? '/assets/img/artist_carousel_mobile.png'
    : '/assets/img/artist_carousel_1300x702.png';

  const imgWidth = matches ? 600 : 900;

  return (
    <Container maxWidth="md" component="section">
      <Box
        id="more-features"
        sx={{
          ...sectionStyles.sectionContainer,
          color: 'white',
        }}
      >
        <SectionAnchorTarget id="more-features-target" />
        <Grid container sx={{ mt: 3 }} spacing={0}>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <EventAvailableOutlinedIcon sx={styles.icon} fontSize="large" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Scheduling
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              Accept or decline appointments online. Set availability on the
              HyperTattoo calendar so you only get reservations when you’re able
              to work.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <CreditCardOutlinedIcon sx={styles.icon} fontSize="large" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Payment processing
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              Set custom rates, collect deposits before sessions, and close out
              balances with either card or cash.
            </Typography>
          </Grid>

          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <NotificationsNoneOutlinedIcon
                sx={styles.icon}
                fontSize="large"
              />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Notifications
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              We notify clients to complete payments and remind them of upcoming
              appointments so you {"don't"} have to.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <StackedLineChartOutlinedIcon sx={styles.icon} fontSize="large" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Business insights
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              Track your revenue and monitor upcoming projects in one
              easy-to-use dashboard.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <ForumOutlinedIcon sx={styles.icon} fontSize="large" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Direct messaging
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              Collaborate on designs, negotiate payments, and stay in touch with
              customers in one place.
            </Typography>
          </Grid>
          <Grid item sm={6} sx={styles.detailsCard}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <AccountCircleOutlinedIcon sx={styles.icon} fontSize="large" />
              <Typography
                sx={styles.detailsCardHeader}
                component="h3"
                variant="h5"
                gutterBottom
              >
                Artist profiles
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.detailsCardText}>
              Share your business details, social pages, and showcase work in a
              custom gallery.
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
