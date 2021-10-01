import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';

const FeaturesSection = (props) => {
  return (
    <Container maxWidth="xl">
      <Box
        id="features"
        component="section"
        sx={{
          ...sectionStyles.sectionContainer,
          '@media (min-width: 600px)': {
            mt: 8,
          },
          color: 'white',
        }}
      >
        <SectionAnchorTarget id="features-target" />
        <SectionHeader
          title="Software"
          subtitle1="Built for the tattoo industry,"
          subtitle2="by the tattoo industry."
        />

        <Box
          sx={{
            background: 'radial-gradient(circle at 50%, #141414 7%, black 75%)',
          }}
        >
          <Image
            src={'/assets/img/phones_1400x1050.png'}
            alt="Phones"
            width={900}
            height={700}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default FeaturesSection;
