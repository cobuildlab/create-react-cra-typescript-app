import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Route, Routes } from 'react-router-dom';
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
  const loadingToken = useSetupAuth0Token();
  useDefaultRedirect('/dashboard');

  const session = useSession();
  /**
   * @param {object} props - Props.
   * @param {string} props.to - Path.
   * @returns {null} - Nothing.
   */
  const Redirect = ({ to }: { to: string }): null => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  };

  if (!isAuthenticated)
    return (
      <Routes>
        <Route path="/" element={<Redirect to="/auth" />} />
      </Routes>
    );

  if (session?.error) console.log('Session Error:', session.error);

  if (loadingToken) {
    return <MainLoader />;
  }

  return <>{children}</>;
}
