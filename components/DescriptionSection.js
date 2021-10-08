import React from 'react';
import Box from '@mui/material/Box';
import { HYPER_PINK } from '../src/colors';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';
import SectionAnchorTarget from './SectionAnchorTarget';

const DescriptionSection = () => {
  return (
    <Box component="section" sx={sectionStyles.sectionContainer}>
      <Box
        id="details.contentContainer"
        sx={{ ...sectionStyles.sectionContentContainer, p: 0, pt: '2rem' }}
      >
        <SectionAnchorTarget id="description-target" />
        <SectionHeader title="" subtitle1="What is HyperTattoo?" />
      </Box>
    </Box>
  );
};

export default DescriptionSection;
