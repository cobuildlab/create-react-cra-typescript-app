import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './shared/mui-theme';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';
import { Routes } from './routes/routes';
import './shared/css/App.css';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
