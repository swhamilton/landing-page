import React from 'react';
import { css } from '@emotion/react';

// @material-ui/core components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const headerLinkStyles = {
  list: {
    // ...defaultFont,
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    marginLeft: '0.3rem',
  },
  navLink: {
    color: 'inherit',
    position: 'relative',
    padding: '0.5rem 1.5rem',
    fontWeight: '500',
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    textDecoration: 'none',
    textTransform: 'none',
    borderWidth: '2.5px',
    borderRadius: '0.5rem',
    margin: '0',
    display: 'inline-flex',

    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(100, 100, 100, 0.2)',
    },
  },
  signInButton: {
    '&:hover': {
      border: '2.5px solid #ed0c6f',
    },
  },
};

const OutlineButton = ({ style, text, rest }) => (
  <Button variant="outlined" {...rest}>
    {text}
  </Button>
);

export default function HeaderLinks(props) {
  return (
    <List sx={headerLinkStyles.list}>
      <ListItem sx={headerLinkStyles.listItem}>
        <Button href="#home" sx={headerLinkStyles.navLink}>
          Home
        </Button>
      </ListItem>
      <ListItem sx={headerLinkStyles.listItem}>
        <Button href="#features" sx={headerLinkStyles.navLink}>
          Features
        </Button>
      </ListItem>
      <ListItem sx={headerLinkStyles.listItem}>
        <Button href="#pricing" sx={headerLinkStyles.navLink}>
          Pricing
        </Button>
      </ListItem>
      <ListItem sx={headerLinkStyles.listItem}>
        {/* <OutlineButton
          text="Log in"
          href="#login"
          style={headerLinkStyles.navLink}
        /> */}
        <Button
          variant="outlined"
          href="#login"
          sx={{ ...headerLinkStyles.navLink, ...headerLinkStyles.signInButton }}
        >
          Log in
        </Button>
      </ListItem>
    </List>
  );
}
