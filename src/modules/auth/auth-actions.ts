import { tryCatch } from '@cobuildlab/error-handling';
import { CURRENT_USER_QUERY, USER_SIGN_UP_MUTATION } from './auth-queries';
import { apolloClient as client } from '../../shared/apollo/client';
import { AUTH_PROFILE_ID } from '../../shared/constants';

/**
 * Authenticate or Signup 8base user.
 *
 * @param {string} email  - The email of the User authenticated.
 */
export const handleAuthentication = async (email: string): Promise<void> => {
  const [, error] = await tryCatch(
    client.query({
      query: CURRENT_USER_QUERY,
    })
  );

  if (error) {
    await tryCatch(
      client.mutate({
        mutation: USER_SIGN_UP_MUTATION,
        variables: {
          user: { email },
          authProfileId: AUTH_PROFILE_ID,
        },
      })
    );
  }
};
