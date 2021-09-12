import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSetupAuth0Token } from '../auth-hooks';
import { handleAuthentication } from '../auth-actions';

// TODO add loading component
/**
 * @param {object} props - Props.
 * @param {object} props.history - History of rect router.
 * @returns {JSX.Element} - Auth callback component.
 */
export function AuthCallback({ history }: RouteComponentProps): JSX.Element {
  const { user, isAuthenticated } = useAuth0();

  useSetupAuth0Token();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
      if (user && user.email) handleAuthentication(user.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // NOT ADD LOADING COMPONENT HERE this must be a loading auth component
  return <div>authenticated....</div>;
}
