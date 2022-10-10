import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Loader } from '../../../shared/components/ui/Loader';
import { useLocalStorage } from '../../../shared/hooks/storage';

/**
 * @returns {JSX.Element} - Logout element.
 */
export function Logout(): JSX.Element {
  const { logout } = useAuth0();
  const { clearAll } = useLocalStorage();
  useEffect(() => {
    // Clear all variables in local storage.
    clearAll();

    logout({
      returnTo: window.location.origin,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout]);

  return <Loader fullPage />;
}
