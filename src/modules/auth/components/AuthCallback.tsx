import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Loader } from '../../../shared/components/ui/Loader';
import { ROUTES } from '../../../shared/constants';
import { useLocalStorage } from '../../../shared/hooks/storage';
import { useAuth } from '../auth-hooks';

/**
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback(): JSX.Element {
  const { user, isAuthenticated } = useAuth0();
  const { getToken, handleAuthentication } = useAuth();
  const { init, setItem } = useLocalStorage();
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // init local storage
      init();

      getToken().then((token) => {
        if (token && user) {
          setItem('token', token);

          handleAuthentication(user.email as string).finally(() =>
            navigate(state.returnTo || ROUTES.DASHBOARD)
          );
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getToken, isAuthenticated]);

  return <Loader fullPage />;
}
