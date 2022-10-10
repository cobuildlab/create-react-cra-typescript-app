import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Loader } from '../../shared/components/ui/Loader';

/**
 * @returns {JSX.Element} - Auth component.
 */
export function AuthView(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect({
      appState: {
        redirectTo: window.location.pathname,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader fullPage />;
}
