import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import { Auth0ProviderWithHistory } from './shared/auth0/Auth0ProviderWithHistory';
import { apolloClient } from './shared/apollo/client';
import { Session } from './shared/components/Session';
import { theme } from './shared/css/theme';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Session>
              <Routes />
            </Session>
          </ThemeProvider>
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

export { App };
