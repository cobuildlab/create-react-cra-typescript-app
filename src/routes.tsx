import React from 'react';
import { Routes as RoutesComponent, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Auth } from './modules/auth/Auth';
import { AuthCallback } from './modules/auth/components/AuthCallback';
import { Logout } from './modules/auth/Logout';
import { Dashboard } from './modules/dashboard/components/DashboradView';
import { Session } from './modules/auth/Session';
import { apolloClient as client } from './shared/apollo';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';
import { Layout } from './shared/components/Layout';

/**
 * @returns Routes.
 */
export const Routes: React.FC = () => (
  <>
    <Auth0ProviderWithHistory>
      <ApolloProvider client={client}>
        <Session>
          <RoutesComponent>
            <Route
              path="/"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
          </RoutesComponent>
        </Session>
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  </>
);
