import { ReactElement } from 'react';

import { Loader } from './ui/Loader';
import { useSession } from '../../modules/auth/auth-hooks';

type SessionProps = {
  children: ReactElement;
};

/**
 * @param {SessionProps} props - Props.
 * @param {ReactElement}  props.children - Children.
 * @returns {ReactElement} - Session component.
 */
export function Session({ children }: SessionProps): ReactElement {
  const session = useSession();

  if (session?.loading) return <Loader fullPage />;

  return children;
}
