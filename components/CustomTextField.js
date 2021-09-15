import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CustomTextField() {
  const SubmitButton = () => (
    <Button
      variant="contained"
      sx={{
        borderRadius: '0 4px 4px 0',
        fontSize: '1rem',
        fontWeight: '600',
        padding: '0.6rem 2rem',
        textTransform: 'none',
      }}
    >
      Submit
    </Button>
  );

  return (
    <>
      <TextField
        sx={{ margin: 4, marginBottom: 5, minWidth: '22rem' }}
        hiddenLabel
        placeholder="Email"
        id="filled-hidden-label-small"
        variant="standard"
        size="small"
        InputProps={{
          sx: {
            '& .MuiInputBase-input': {
              padding: 0,
              paddingTop: 0,
            },

            paddingLeft: '0.8rem',
            paddingRight: 0,
            borderRadius: '4px',
            backgroundColor: 'white',
          },
          disableUnderline: true,
          endAdornment: <SubmitButton />,
        }}
      />
    </>
  );
}
