import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSubscription } from '@cobuildlab/react-simple-state';
import { useHistory } from 'react-router-dom';
import { useSetupAuth0Token } from '../auth-hooks';
import { handleAuthentication } from '../auth-actions';
import { MainLoader } from '../../../shared/components/MainLoader';
import { OnAuthtenticated } from '../auth-events';

// TODO add loading component
/**
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback(): JSX.Element {
  const auth = useAuth0();

  const { user, isAuthenticated } = auth;

  const { isTokenReady } = useSetupAuth0Token();
  const history = useHistory();

  useEffect(() => {
    if (isTokenReady && isAuthenticated) {
      if (user?.email) handleAuthentication(user.email);
    }
  }, [isAuthenticated, isTokenReady, user?.email]);

  useSubscription(OnAuthtenticated, (isAuth) => {
    if (isAuth) {
      history.push('/');
    }
  });
  // NOT ADD LOADING COMPONENT HERE this must be a loading auth component
  return <MainLoader text="Loading user..." />;
}
