import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

import { QueryResponse } from '../../shared/types';
import { FETCH_SESSION_QUERY } from './auth-queries';
import { SessionQuery } from './auth-types';

type AuthHookType = {
  getToken: () => Promise<string | null>;
};

/**
 * Hook for returning the User Session.
 *
 * @returns {QueryResponse<SessionQuery>} The response.
 */
export function useSession(): QueryResponse<SessionQuery> | null {
  const { loading, error, data, refetch } =
    useQuery<SessionQuery>(FETCH_SESSION_QUERY);
  return { loading, error, data, refetch };
}

/**
 * Auth hook.
 *
 * @returns {AuthHookType} - Auth state/methods.
 */
export const useAuth = (): AuthHookType => {
  const { getIdTokenClaims } = useAuth0();

  const getToken = useCallback(async () => {
    const token = await getIdTokenClaims();
    // eslint-disable-next-line no-underscore-dangle
    const tokenRaw: string | undefined = token?.__raw;
    return tokenRaw || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getToken,
  };
};
