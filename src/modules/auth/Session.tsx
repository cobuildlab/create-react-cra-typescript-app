import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, useLocation } from 'react-router-dom';
import { MainLoader } from '../../shared/components/MainLoader';
import {
  useDefaultRedirect,
  useSession,
  useSetupAuth0Token,
} from './auth-hooks';

type SessionProps = {
  children: React.ReactNode;
};

/**
 * @param {object} props - Props.
 * @param {JSX.Element}  props.children - Children.
 * @returns {JSX.Element} - Session component.
 */
export function Session({ children }: SessionProps): JSX.Element {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  const loadingToken = useSetupAuth0Token();
  useDefaultRedirect('/dashboard');

  const session = useSession();

  if (!isAuthenticated)
    return (
      <Redirect
        to={{
          pathname: '/auth',
          state: { from: location.pathname },
        }}
      />
    );

  if (session?.error) console.log('Session Error:', session.error);

  if (loadingToken) {
    return <MainLoader />;
  }

  return <>{children}</>;
}
