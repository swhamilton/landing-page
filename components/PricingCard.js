import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HYPER_PINK } from '../src/colors';

const styles = {
  header: {
    fontSize: '1.3rem',
    padding: 0,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: HYPER_PINK,
    padding: '0.8rem',
  },
  price: {
    position: 'relative',
    fontSize: '3.5rem',
    fontWeight: '600',
    lineHeight: '3.5rem',
  },
  pricingButton: {
    padding: '0.6rem 1.3rem',
    fontSize: '1rem',
    textTransform: 'none',
    fontWeight: '800',
  },
};

const FeaturesList = ({ features, id }) => (
  <List sx={{ p: '0 1rem' }}>
    {(features || []).map((line, featureIndex) => (
      <ListItem disablePadding key={`tier${id}-featureIndex${featureIndex}`}>
        <ListItemIcon sx={{ minWidth: '40px' }}>
          <CheckIcon fontSize="small" sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText
          primary={line}
          primaryTypographyProps={{
            fontWeight: featureIndex === 0 ? '600' : '400',
            lineHeight: '1.8 rem',
          }}
        />
      </ListItem>
    ))}
  </List>
);

const PricingCard = ({
  accordianTitle,
  buttonText,
  features,
  headerIcon,
  id,
  price,
  priceDetails,
  priceExtraDetails,
  subheader,
  title,
  useAccordian,
  useCurrencySymbol,
}) => (
  <Card
    sx={{
      background: '#333333',
      borderRadius: 2,
      color: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <CardContent sx={{ p: 0, flex: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
          pt: 4,
        }}
      >
        {headerIcon}
        <Typography sx={styles.header} component="h2" variant="h4">
          {title}
        </Typography>
        <Typography
          sx={{
            ...styles.price,
            ':before': {
              content: useCurrencySymbol ? '"$"' : '""',
              fontSize: '2rem',
              position: 'absolute',
              left: '-1rem',
              top: '-0.8rem',
            },
          }}
          component="h2"
          variant="h4"
        >
          {price}
        </Typography>
        <Typography variant="body1" color="grey.100" pb={'0.3rem'}>
          {priceDetails}
        </Typography>
        <Typography variant="body2" color="grey.500" mb={1}>
          {priceExtraDetails}
        </Typography>
      </Box>
      <Box sx={{ borderTop: '2px solid #141414', p: 2 }}>
        {useAccordian && (
          <Accordion
            sx={{
              background: 'transparent',
              color: 'white',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0 }}
            >
              <Typography sx={{ fontWeight: '600' }}>
                {accordianTitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FeaturesList features={features} id={id} />
            </AccordionDetails>
          </Accordion>
        )}
        {!useAccordian && <FeaturesList features={features} id={id} />}
      </Box>
    </CardContent>
    <CardActions
      sx={{ display: 'flex', justifyContent: 'center', p: 4, pt: 1 }}
    >
      <Button
        id="LandingPage-PricingButton-${id}"
        sx={styles.pricingButton}
        variant="contained"
        fullWidth
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

export default PricingCard;
