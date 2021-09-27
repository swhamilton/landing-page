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
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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

const PricingCard = ({
  buttonText,
  features,
  id,
  price,
  priceDetails,
  priceExtraDetails,
  subheader,
  title,
  useCurrencySymbol,
}) => (
  <Card
    sx={{
      background: '#252525',
      borderRadius: 2,
      color: 'white',
    }}
  >
    <CardContent sx={{ p: 0 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <CheckBoxIcon sx={{ fontSize: 50 }} />
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
      <Box sx={{ borderTop: '2px solid black', p: 2 }}>
        <List sx={{ p: '0 1rem' }}>
          {features.map((line, featureIndex) => (
            <ListItem
              disablePadding
              key={`tier${id}-featureIndex${featureIndex}`}
            >
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
      </Box>
    </CardContent>
    <CardActions
      sx={{ display: 'flex', justifyContent: 'center', p: 4, pt: 1 }}
    >
      <Button
        id="LandingPage-PricingButton-${id}"
        sx={styles.pricingButton}
        variant="contained"
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

export default PricingCard;
