import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';

const FeaturesSection = (props) => {
  return (
    <Box
      id="features"
      component="section"
      sx={{
        ...sectionStyles.sectionContainer,
        color: 'white',
      }}
    >
      <Box component="section" sx={sectionStyles.sectionContainer}>
        <Box
          id="features.contentContainer"
          sx={sectionStyles.sectionContentContainer}
        >
          <SectionAnchorTarget id="features-target" />
          <SectionHeader
            title="Introducing"
            subtitle1="The all-in-one solution."
          />
          <Typography sx={{ fontSize: '1.3rem' }} variant="body1" gutterBottom>
            HyperTattoo enables artists and studios to replace their current
            multi-faceted approach to scheduling and payments with an all-in-one
            platform.
          </Typography>
          <Box
            sx={{
              // background: radial-gradient(closest-side, green, black, black);
              // background: radial-gradient(circle at 50%, #444 7%, black 75%);
              background:
                'radial-gradient(circle at 50%, #141414 7%, black 75%)',
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
      </Box>
    </Box>
  );
};

export default FeaturesSection;
