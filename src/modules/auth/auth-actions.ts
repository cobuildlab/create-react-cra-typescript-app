import { createAction } from '@cobuildlab/react-simple-state';
import { apolloClient } from '../../shared/apollo';
import { AUTH_PROFILE_ID } from '../../shared/constants';
import {
  CURRENT_USER_QUERY,
  USER_SIGN_UP_MUTATION,
} from './auth-callback/auth-callback-queries';
import { OnAuthtenticated, OnAuthtenticatedError } from './auth-events';

export const handleAuthentication = createAction(
  OnAuthtenticated,
  OnAuthtenticatedError,
  async (email: string) => {
    try {
      await apolloClient.query({
        query: CURRENT_USER_QUERY,
      });
      return true;
    } catch (error) {
      await apolloClient.mutate({
        mutation: USER_SIGN_UP_MUTATION,
        variables: {
          user: { email },
          authProfileId: AUTH_PROFILE_ID,
        },
      });
      return true;
    }
  },
);
