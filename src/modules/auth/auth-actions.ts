import { createAction } from '@cobuildlab/react-simple-state';

import { OnTokenEvent, OnTokenErrorEvent } from './auth-events';
import { CURRENT_USER_QUERY, USER_SIGN_UP_MUTATION } from './auth-queries';
import { apolloClient as client } from '../../shared/apollo/client';
import { AUTH_PROFILE_ID } from '../../shared/constants';

export const fetchTokenAction = createAction(
  OnTokenEvent,
  OnTokenErrorEvent,
  async (getIdTokenClaims) => {
    const token = await getIdTokenClaims();
    // eslint-disable-next-line no-underscore-dangle
    const tokenRaw: string | undefined = token?.__raw;

    return { token: tokenRaw || null };
  }
);

/**
 * Authenticate or Signup 8base user.
 *
 * @param {string} email  - The email of the User authenticated.
 */
export const handleAuthentication = async (email: string): Promise<void> => {
  try {
    await client.query({
      query: CURRENT_USER_QUERY,
    });
  } catch (error) {
    await client.mutate({
      mutation: USER_SIGN_UP_MUTATION,
      variables: {
        user: { email },
        authProfileId: AUTH_PROFILE_ID,
      },
    });
  }
};
