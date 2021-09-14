export const sectionStyles = {
  sectionContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  sectionContentContainer: {
    fontSize: '22.4px',
    fontSize: '1.4rem',
    lineHeight: '28.8px',
    lineHeight: '1.8rem',
    padding: '4rem 16px',
    width: '100%',
    zIndex: '1',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem',
    paddingLeft: '15px',
    paddingRight: '15px',
    '@media (min-width: 600px)': {
      maxWidth: '960px',
    },
    mainContainer: {
      overflowX: 'hidden',
      minHeight: 'calc(100vh - 50px)',
      width: '100%',
    },
  },
  pricingButton: { padding: 2, fontSize: '1rem', textTransform: 'none' },
};

export default sectionStyles;
