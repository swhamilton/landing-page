import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CustomButton = ({ styles, buttonIcon, buttonText, ...rest }) => (
  <Button
    variant="contained"
    {...rest}
    endIcon={buttonIcon}
    sx={{
      ...styles,
    }}
  >
    {buttonText}
  </Button>
);
const defaultButtonStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  padding: '0.6rem 2rem',
  textTransform: 'none',
};

export default function CustomTextField(props) {
  return (
    <TextField
      sx={props.textFieldStyles}
      hiddenLabel
      placeholder={props.placeholder}
      id="filled-hidden-label-small"
      variant="standard"
      size="small"
      InputProps={{
        sx: {
          '& .MuiInputBase-input': {
            // padding: 0,
            paddingTop: 1,
            paddingBottom: 1,
          },
          paddingLeft: '0.7rem',
          paddingRight: props.useButton ? 0 : '0.5rem',
          borderRadius: '4px',
          backgroundColor: 'white',
          ...props.inputFieldStyles,
        },
        disableUnderline: true,
        endAdornment: props.useButton && (
          <CustomButton
            buttonIcon={props.buttonIcon}
            buttonText={props.buttonText}
            styles={{ ...defaultButtonStyles, ...props.buttonStyles }}
          />
        ),
      }}
    />
  );
}
