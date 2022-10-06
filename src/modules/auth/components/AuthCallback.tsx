import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

import { Loader } from '../../../shared/components/ui/Loader';
import { ROUTES } from '../../../shared/constants';
import { fetchTokenAction, handleAuthentication } from '../auth-actions';

/**
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback(): JSX.Element {
  const { user, getIdTokenClaims } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTokenAction(getIdTokenClaims).then((response) => {
      if ('token' in response) {
        if (user && response.token) {
          handleAuthentication(user.email as string).finally(() =>
            navigate(ROUTES.DASHBOARD)
          );
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getIdTokenClaims]);

  return <Loader fullPage />;
}
