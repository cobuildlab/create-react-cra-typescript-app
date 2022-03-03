import React from 'react';
import { useSession } from '../../auth/auth-hooks';

/**
 * @returns {JSX.Element} - Dash board view.
 */
export const Dashboard = (): JSX.Element => {
  const session = useSession();

  console.log('session', session);

  return <div>Dashboard component</div>;
};
