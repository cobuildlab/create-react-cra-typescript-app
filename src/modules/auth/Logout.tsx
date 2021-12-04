import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MainLoader } from '../../shared/components/MainLoader';

// TODO add loading component
/**
 * @returns {JSX.Element} - Logout element.
 */
export function Logout(): JSX.Element {
  const { logout } = useAuth0();
  useEffect(() => {
    logout({
      returnTo: window.location.origin,
    });
  }, [logout]);

  return <MainLoader text="Loging Out..." />;
}
