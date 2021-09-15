import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function CustomTextField() {
  const SubmitButton = () => (
    <Button
      variant="contained"
      sx={{
        borderRadius: '0 0.4rem 0.4rem 0',
        fontSize: '1rem',
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
        sx={{ margin: 4, minWidth: '22rem' }}
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
            paddingLeft: 1,
            paddingRight: 0,
            borderRadius: '5.5px',
            backgroundColor: 'white',
          },
          disableUnderline: true,
          endAdornment: <SubmitButton />,
        }}
      />
    </>
  );
}
