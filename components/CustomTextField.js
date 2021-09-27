import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const defaultButtonStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: '0.5rem 2rem',
  textTransform: 'none',
};
export const CustomButton = ({ styles, buttonIcon, buttonText, ...rest }) => (
  <Button
    variant="contained"
    {...rest}
    endIcon={buttonIcon}
    sx={{
      ...defaultButtonStyles,
      ...styles,
    }}
  >
    {buttonText}
  </Button>
);
const defaultInputButtonStyles = {
  fontSize: '1.2rem',
  fontWeight: '600',
  padding: '0.5rem 2rem',
  textTransform: 'none',
  borderRadius: '0 4px 4px 0',
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
            paddingTop: '0.8rem',
            paddingBottom: '0.8rem',
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
            styles={{ ...defaultInputButtonStyles, ...props.buttonStyles }}
          />
        ),
      }}
    />
  );
}
