import { useCallback, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Loader } from '../../../shared/components/ui/Loader';
import { ROUTES } from '../../../shared/constants';
import { handleAuthentication } from '../auth-actions';

/**
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback(): JSX.Element {
  const { user, getIdTokenClaims, isAuthenticated } = useAuth0();
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const fetchToken = useCallback(async () => {
    const token = await getIdTokenClaims();
    // eslint-disable-next-line no-underscore-dangle
    const tokenRaw: string | undefined = token?.__raw;
    return tokenRaw || null;
  }, [getIdTokenClaims]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchToken().then((token) => {
        if (token && user) {
          localStorage.setItem('token', token);

          handleAuthentication(user.email as string).finally(() =>
            navigate(state.returnTo || ROUTES.DASHBOARD)
          );
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchToken, isAuthenticated]);

  return <Loader fullPage />;
}
