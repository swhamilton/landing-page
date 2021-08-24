import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import GlobalContext from '../state/globalContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [state, setState] = React.useState({
    isLoggedIn: false,
    update, // add a simple way to update global state
  });

  function update(data) {
    setState(Object.assign({}, state, data));
  }

  return (
    <CacheProvider value={emotionCache}>
      <GlobalContext.Provider value={state}>
        <Head>
          <title>HT</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext.Provider>
    </CacheProvider>
  );
}
