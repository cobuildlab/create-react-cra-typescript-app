import React from 'react';
import { Routes as RoutesComponent, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Auth } from './modules/auth/Auth';
import { AuthCallback } from './modules/auth/components/AuthCallback';
import { Logout } from './modules/auth/Logout';
import { Layout } from './shared/components/Layout';
import { Dashboard } from './modules/dashboard/components/DashboradView';
import { Session } from './modules/auth/Session';
import { apolloClient as client } from './shared/apollo';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';

/**
 * @returns Routes.
 */
export const Routes: React.FC = () => (
  <>
    <RoutesComponent>
      <Route path="/auth" element={Auth} />
      <Route path="/auth/callback" element={AuthCallback} />
      <Route path="/logout" element={Logout} />
      <Layout>
        <Route path="/dashboard" element={Dashboard} />
      </Layout>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <Session>
            <Layout>
              <Route path="/dashboard-in-session" element={Dashboard} />
            </Layout>
          </Session>
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </RoutesComponent>
  </>
);
