import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Auth } from './modules/auth/Auth';
import { AuthCallback } from './modules/auth/components/AuthCallback';
import { Logout } from './modules/auth/Logout';
import { Layout } from './shared/components/Layout';
import { Dashboard } from './modules/dashboard/DashboradView';
import { Session } from './modules/auth/Session';
import { apolloClient as client } from './shared/apollo';
import { Auth0ProviderWithHistory } from './modules/auth/Auth0ProviderWithHistory';

/**
 * @returns Routes.
 */
export const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/auth/callback" component={AuthCallback} />
      <Route path="/logout" component={Logout} />
      <Layout>
        <Route path="/dashboard" component={Dashboard} exact />
      </Layout>
      <Auth0ProviderWithHistory>
        <ApolloProvider client={client}>
          <Session>
            <Layout>
              <Route path="/dashboard-in-session" component={Dashboard} exact />
            </Layout>
          </Session>
        </ApolloProvider>
      </Auth0ProviderWithHistory>
    </Switch>
  </>
);
