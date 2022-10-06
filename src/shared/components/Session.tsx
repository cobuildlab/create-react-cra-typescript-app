import React from 'react';

import { Loader } from './ui/Loader';
import { useSession } from '../../modules/auth/auth-hooks';

type SessionProps = {
  children: React.ReactElement;
};

/**
 * @param {object} props - Props.
 * @param {JSX.Element}  props.children - Children.
 * @returns {JSX.Element} - Session component.
 */
export function Session({ children }: SessionProps): JSX.Element {
  const session = useSession();

  if (session?.loading) return <Loader fullPage />;

  return children;
}
