import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const QuoteCard = () => {
  <Box>
    <Paper elevation={0} sx={{ background: '#f3f3f3', padding: '1rem' }}>
      <FormatQuoteIcon style={{ fontSize: 50 }} />
      <Typography variant="subtitle1">
        HyperTattoo <strong>saves me over 15% in monthly expenses</strong> as
        well as countless hours in weekly bookkeeping. I now have more time to{' '}
        <strong>focus on upcoming projects.</strong>
      </Typography>
      <Typography variant="subtitle1">
        - Izzy Williams,{' '}
        <i>
          <strong>Lightning Studio</strong>
        </i>
      </Typography>
    </Paper>
  </Box>;
};

export default QuoteCard;
