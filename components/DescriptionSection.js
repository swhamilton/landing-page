import React from 'react';
import Box from '@mui/material/Box';
import { HYPER_PINK } from '../src/colors';
import SectionHeader from './SectionHeader';
import sectionStyles from '../styles/sectionStyles';

const DescriptionSection = () => {
  return (
    <Box component="section" sx={sectionStyles.sectionContainer}>
      <Box
        id="details.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <SectionHeader title="" subtitle1="What is HyperTattoo?" />
      </Box>
    </Box>
  );
};

export default DescriptionSection;
