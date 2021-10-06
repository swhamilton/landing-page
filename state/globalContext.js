import React from 'react';

const GlobalContext = React.createContext({
  isLoggedIn: false,
  viewContext: process.env.VIEW_CONTEXT,
});

export default GlobalContext;
