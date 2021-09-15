import React from 'react';
import { css } from '@emotion/react';

// @mui/material components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';

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
    fontSize: '1rem',
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

const scrollToId = (id) => (e) => {
  e.preventDefault();
  document
    .getElementById(id)
    .scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function HeaderLinks(props) {
  return (
    <List id="header-links-container" sx={headerLinkStyles.list}>
      <Hidden mdDown implementation="css">
        <ListItem sx={headerLinkStyles.listItem}>
          <Button
            href="#home"
            sx={headerLinkStyles.navLink}
            onClick={scrollToId('home')}
          >
            Home
          </Button>
        </ListItem>
        <ListItem sx={headerLinkStyles.listItem}>
          <Button
            href="#features"
            sx={headerLinkStyles.navLink}
            onClick={scrollToId('features-target')}
          >
            Features
          </Button>
        </ListItem>
        <ListItem sx={headerLinkStyles.listItem}>
          <Button
            href="#pricing"
            sx={headerLinkStyles.navLink}
            onClick={scrollToId('pricing-target')}
          >
            Pricing
          </Button>
        </ListItem>
      </Hidden>
      <ListItem sx={headerLinkStyles.listItem}>
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
