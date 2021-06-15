import { OnFetchSession } from './session-events';
// import { FetchSessionResponse } from './session-types';

/**
 * @description - fetch session.
 * @returns {void}.
 */
export const fetchSession = async (): Promise<void> => {
  OnFetchSession.dispatch(null);
};
