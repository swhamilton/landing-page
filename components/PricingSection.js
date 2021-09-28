import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

// Custom
import SectionAnchorTarget from './SectionAnchorTarget';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';
import sectionStyles from '../styles/sectionStyles';
import StudioIcon from './StudioIcon';

const PricingSection = (props) => {
  const mobileView = useMediaQuery('(max-width:600px)');
  return (
    <Box
      id="pricing"
      component="section"
      sx={{ ...sectionStyles.sectionContainer, background: '#131313' }}
    >
      <SectionAnchorTarget id="pricing-target" />
      <Box
        id="pricingSection.contentContainer"
        sx={sectionStyles.sectionContentContainer}
      >
        <SectionHeader title="Pricing" subtitle1="Simple pricing." />

        <Grid mt={0} container spacing={3} alignItems="flex-end">
          {(props.tiers || []).map((tier, tierIndex) => {
            const {
              accordianTitle,
              buttonText,
              features,
              headerIcon,
              price,
              priceDetails,
              priceExtraDetails,
              title,
              useCurrencySymbol,
            } = tier;
            return (
              <Grid item key={tier.title} xs={12} sm={6} md={6}>
                <PricingCard
                  accordianTitle={accordianTitle}
                  buttonText={buttonText}
                  features={features}
                  headerIcon={headerIcon}
                  key={title}
                  price={price}
                  priceDetails={priceDetails}
                  priceExtraDetails={priceExtraDetails}
                  title={title}
                  useAccordian={mobileView}
                  useCurrencySymbol={useCurrencySymbol}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingSection;
