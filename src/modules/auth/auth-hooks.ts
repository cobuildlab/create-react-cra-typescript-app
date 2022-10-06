import { useQuery } from '@apollo/client';

import { QueryResponse } from '../../shared/types';
import { FETCH_SESSION_QUERY } from './auth-queries';
import { SessionQuery } from './auth-types';

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
