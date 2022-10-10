import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  split,
} from '@apollo/client';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
// import { createClient as createGraphqlWsClient } from 'graphql-ws';

import {
  WORKSPACE_ENDPOINT,
  EIGHTBASE_WS_ENDPOINT,
  WORKSPACE_ID,
  ENVIRONMENT_NAME,
  PROJECT_ID,
} from '../constants';

/**
 * @param {object} headers - Extra header to the client.
 * @returns {object} Apollo client.
 */
export function createApolloClient(
  headers = {}
): ApolloClient<NormalizedCacheObject> {
  const environmentName =
    ENVIRONMENT_NAME &&
    ENVIRONMENT_NAME.length > 0 &&
    ENVIRONMENT_NAME.toLowerCase() !== 'master'
      ? ENVIRONMENT_NAME
      : undefined;
  const httpLink = new HttpLink({
    uri: WORKSPACE_ENDPOINT,
  });
  const prefix = PROJECT_ID;

  const authLink = setContext((_, { headers: _headers }) => {
    const token = localStorage.getItem(`${prefix}-token`);

    return {
      headers: {
        ...headers,
        ..._headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const wsLink = new WebSocketLink({
    uri: EIGHTBASE_WS_ENDPOINT,
    options: {
      reconnect: true,
      lazy: true,
      /**
       * @returns - Connection Params.
       */
      connectionParams: () => {
        const token = localStorage.getItem(`${prefix}-token`);
        return {
          token,
          environmentName,
          workspaceId: WORKSPACE_ID,
        };
      },
    },
    webSocketImpl: class WebSocketWithoutProtocol extends WebSocket {
      /* eslint-disable @typescript-eslint/no-useless-constructor */
      /**
       * @param url - Endpoint of websocket.
       */
      constructor(url: string) {
        super(url); // ignore protocol
      }
    },
  });

  // const wsLink = new GraphQLWsLink(
  //   createGraphqlWsClient({
  //     url: EIGHTBASE_WS_ENDPOINT,
  //     lazy: true,

  //     /**
  //      * ConnectionParams.
  //      *
  //      * @returns Websocket payload.
  //      */
  //     connectionParams: () => {
  //       const token = localStorage.getItem(`${prefix}-token`);
  //       return {
  //         token,
  //         environmentName,
  //         workspaceId: WORKSPACE_ID,
  //       };
  //     },
  //     // eslint-disable-next-line global-require
  //     webSocketImpl: require('websocket').client, // eslint-disable-line @typescript-eslint/no-var-requires
  //   })
  // );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const client = new ApolloClient({
    uri: WORKSPACE_ENDPOINT,
    link: authLink.concat(splitLink),
    cache: new InMemoryCache(),
  });

  return client;
}

export const apolloClient: ApolloClient<NormalizedCacheObject> =
  createApolloClient();
