import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from '@mui/styles';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';
import { Routes } from './routes/routes';
import { apolloClient as client } from './shared/apollo';

import './shared/css/App.css';
import { theme } from './shared/css/theme';
import { Snackbars } from './shared/components/Snackbar';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth0ProviderWithHistory>
            <ApolloProvider client={client}>
              <Routes />
              <Snackbars />
            </ApolloProvider>
          </Auth0ProviderWithHistory>
        </BrowserRouter>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
