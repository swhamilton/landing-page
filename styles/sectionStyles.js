export const sectionStyles = {
  sectionContainer: {
    color: 'white',
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
    padding: '3rem 16px',
    width: '100%',
    zIndex: '1',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    '@media (min-width: 600px)': {
      maxWidth: '960px',
    },
    '@media (max-width: 600px)': {
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
};

export default sectionStyles;
