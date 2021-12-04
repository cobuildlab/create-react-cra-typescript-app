import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { setContext } from '@apollo/client/link/context';
import { getWorkspaceUrl } from './api';
import { ADMIN_TOKEN, FIELDWORKER_TOKEN } from '../constants';

/**
 * Apollo client for testing environment.
 *
 * @param uri - {string} - GraphQL endpoint.
 * @param token - {string} - JWT token.
 * @returns {ApolloClient<NormalizedCacheObject>} - The test apollo client.
 */
export const createTestApolloClient = (
  uri: string,
  token = '',
): ApolloClient<NormalizedCacheObject> => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token === '' ? null : `Bearer ${token}`,
    },
  }));
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(new HttpLink({ uri, fetch })),
  });
};

export const fielworkerClient = createTestApolloClient(
  getWorkspaceUrl(),
  FIELDWORKER_TOKEN,
);

export const adminClient = createTestApolloClient(
  getWorkspaceUrl(),
  ADMIN_TOKEN,
);
