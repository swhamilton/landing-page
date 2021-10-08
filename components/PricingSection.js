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
import StudioIcon from './Icons/StudioIcon';
import { FOOTER_TOP, HYPER_DARK_PURPLE, HYPER_PURPLE } from '../src/colors';

const PRICING_TOP = '#0a0a0a';
const PricingSection = (props) => {
  const mobileView = useMediaQuery('(max-width:600px)');
  return (
    <Box
      id="pricing"
      component="section"
      sx={{
        ...sectionStyles.sectionContainer,
        background: `linear-gradient(${PRICING_TOP} 80%, ${FOOTER_TOP} 90%)`,
      }}
    >
      <SectionAnchorTarget id="pricing-target" style={{ top: '-40px' }} />
      <Box
        id="pricingSection.contentContainer"
        sx={{
          ...sectionStyles.sectionContentContainer,
          '@media (min-width: 600px)': {
            maxWidth: '800px',
          },
        }}
      >
        <SectionHeader
          title="Pricing"
          subtitle1="Simple pricing."
          sx={{
            '@media (min-width: 600px)': {
              fontSize: '2.5rem',
            },
          }}
        />

        <Grid mt={0} container spacing={3} alignItems="stretch">
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
