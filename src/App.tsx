import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';
import { Routes } from './routes/routes';
import { apolloClient as client } from './shared/apollo';
import './shared/css/App.css';

/**
 * @returns {JSX.Element} - Main app component.
 */
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
