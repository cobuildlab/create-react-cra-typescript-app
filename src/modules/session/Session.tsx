import { MainLoader } from '../../shared/components/MainLoader';
import { useUserSessionQuery } from '../../shared/types/generated';
import { useSetupAuth0Token } from '../auth/auth-hooks';

type SessionProps = {
  children: React.ReactNode;
};

/**
 * @param {object} props - Props.
 * @param {JSX.Element}  props.children - Children.
 * @returns {JSX.Element} - Session component.
 */
export function Session({ children }: SessionProps): JSX.Element {
  const { isTokenReady } = useSetupAuth0Token();

  const sessionState = useUserSessionQuery({
    skip: !isTokenReady,
  });

  if (sessionState.loading || !isTokenReady) {
    return <MainLoader />;
  }

  // prevents rendering the app if an error has occurred
  if (sessionState.error) {
    return <div>something is wrong...</div>;
  }

  return <>{children}</>;
}
