import { Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  createStoreAction,
  useStoreSubcription,
} from '@cobuildlab/react-simple-state';
import { tokenStore } from './auth-events';

const fetchToken = createStoreAction(
  tokenStore,
  async (prevState, auth: Auth0ContextInterface) => {
    const token = await auth.getIdTokenClaims();
    // eslint-disable-next-line no-underscore-dangle
    return { token: token?.__raw as string };
  },
);

/**
 * @returns {void}
 */
export function useSetupAuth0Token(): {
  loading: boolean;
  isTokenReady: boolean;
} {
  const auth = useAuth0();
  const [loading, setLoading] = useState(false);
  const [isTokenReady, setIsTokenReady] = useState(false);

  useStoreSubcription(tokenStore, () => {
    setIsTokenReady(true);
    setLoading(false);
  });

  useEffect(() => {
    if (auth.isAuthenticated) {
      setLoading(true);
      fetchToken(auth);
    }
  }, [auth, auth.getIdTokenClaims, auth.isAuthenticated]);

  // TODO: hanlde the error case when fetching the token
  return { loading, isTokenReady };
}

/**
 * @param {string} route - Default path to redirect.
 * @returns {void}
 */
export function useDefaultRedirect(route: string): void {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      history.push(route);
    }
  }, [location.pathname, history, route]);

  // TODO: hanlde the error case when fetching the token
}
