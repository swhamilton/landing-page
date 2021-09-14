import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function CustomTextField() {
  const SubmitButton = () => (
    <Button
      variant="contained"
      sx={{ fontSize: '1rem', padding: '0.6rem 2rem', textTransform: 'none' }}
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
        variant="filled"
        size="small"
        InputProps={{
          sx: { paddingRight: 0, borderRadius: 1 },
          disableUnderline: true,
          endAdornment: <SubmitButton />,
        }}
      />
    </>
  );
}
