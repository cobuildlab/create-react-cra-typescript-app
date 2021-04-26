import React  from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * @returns {JSX.Element} - Dash board view.
 */
export function Dashboard(): JSX.Element {
  const { logout } = useAuth0();
  const handleLogout = (): void =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div>
      Dashboard asdsads
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
