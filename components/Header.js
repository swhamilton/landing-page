import React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Drawer from '@mui/material/Drawer';
import { scrollToId } from '../utils';

const defaultFont = {
  fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      padding: '0',
    },
  },
  flex: {
    flex: 1,
  },
  appResponsive: {
    margin: '20px 10px',
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  transparent: 'transparent-bg',
  black: 'black-bg',
};

const BrandComponent = () => {
  return (
    <Box
      onClick={scrollToId('home')}
      component="a"
      display="flex"
      flexDirection="column"
      sx={{
        textAlign: 'right',
        width: '180px',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', width: '180px', height: '40px' }}>
        <Image
          alt="Logo"
          src={
            '/assets/img/Atlas_UI_Resources$Layout$horizonal_transparent_background.png'
          }
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Box>
  );
};

const Header = (props) => {
  const { brand, rightLinks, color, changeColorOnScroll } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgColor, setBGColor] = React.useState(color);

  // Bind a scroll listener to change header background
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  let backgroundColorClass = styles[color];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // TODO: Research better perf methods, possibly without state
  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      // Color
      backgroundColorClass = changeColorOnScroll.color;
    } else {
      // Transparent
      backgroundColorClass = color;
    }
    setBGColor(backgroundColorClass);
  };
  const leftLinks = undefined;

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: bgColor }}
      sx={{
        transition: '0.2s',
        padding: '0.1rem 1.3rem',
        boxShadow: 'none',
        '@media (max-width: 600px)': {
          padding: '0 0.6em',
        },
      }}
    >
      <Toolbar sx={styles.toolbar}>
        <BrandComponent />
        {rightLinks}
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          <Box sx={styles.appResponsive}>
            {leftLinks}
            {rightLinks}
          </Box>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
