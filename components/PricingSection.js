import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';
import sectionStyles from '../styles/sectionStyles';

const PricingSection = (props) => {
  return (
    <Box id="pricing" component="section" sx={sectionStyles.sectionContainer}>
      <SectionAnchorTarget id="pricing-target" />
      <Box
        id="pricingSection.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <SectionHeader
          title="Pricing"
          subtitle1={'Simple pricing to match your studio as it grows.'}
        />

        <Grid mt={2} container spacing={3} alignItems="flex-end">
          {(props.tiers || []).map((tier, tierIndex) => {
            const {
              buttonText,
              features,
              price,
              priceDetails,
              priceExtraDetails,
              title,
              useCurrencySymbol,
            } = tier;
            return (
              <Grid item key={tier.title} xs={12} sm={6} md={6}>
                {/* <PricingCard
                  useCurrencySymbol={useCurrencySymbol}
                  key={title}
                  buttonText={buttonText}
                  features={features}
                  price={price}
                  priceDetails={priceDetails}
                  priceExtraDetails={priceExtraDetails}
                  title={title}
                /> */}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingSection;
