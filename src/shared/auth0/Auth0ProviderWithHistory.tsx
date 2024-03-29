import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  AUTH_CLIENT_ID,
  AUTH_CLIENT_DOMAIN,
  AUTH_CLIENT_REDIRECT_URI,
} from '../constants';

export type AppState = {
  returnTo?: string;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

/**
 * @param {object} props -  Props.
 * @param {JSX.Element} props.children -  Props.
 * @returns {JSX.Element} Auth0ProviderWithHistory.
 */
export function Auth0ProviderWithHistory({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const navigate = useNavigate();

  /**
   * @param appState - State of the app.
   */
  const onRedirectCallback = (appState: AppState | undefined): void => {
    navigate(window.location.pathname, { state: appState });
  };

  return (
    <Auth0Provider
      domain={AUTH_CLIENT_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      redirectUri={AUTH_CLIENT_REDIRECT_URI}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
