import { createEvent } from '@cobuildlab/react-simple-state';

import { AuthDataType } from './auth-types';

export const OnTokenEvent = createEvent<AuthDataType>({
  initialValue: { token: null },
});
export const OnTokenErrorEvent = createEvent<Error>();
