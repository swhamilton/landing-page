import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HYPER_PINK } from '../src/colors';
import { defaultHeaderFont } from '../src/theme';

const styles = {
  headerContainer: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      padding: '1rem 0',
    },
  },
  header: {
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.5rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: HYPER_PINK,
    '@media (max-width: 600px)': {
      lineHeight: '1.5rem',
    },
  },
  subtitle: {
    ...defaultHeaderFont,
    fontSize: '2.5rem',
    fontWeight: '600',
    lineHeight: '3rem',
    '@media (max-width: 600px)': {
      fontSize: '1.6rem',
      lineHeight: '2.5rem',
    },
  },
};

const SectionHeader = (props) => {
  return (
    <Box sx={styles.headerContainer} id={props.id}>
      {/* <Typography variant="h6" sx={styles.header} mb={1}>
        {props.title}
      </Typography> */}
      <Typography
        align="center"
        noWrap
        sx={{ ...styles.subtitle, ...props.subtitleStyles }}
        variant="subtitle1"
      >
        {props.subtitle1}
      </Typography>
      {props.subtitle2 && (
        <Typography
          align="center"
          noWrap
          sx={{ ...styles.subtitle, ...props.subtitleStyles }}
          variant="subtitle1"
        >
          {props.subtitle2}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
