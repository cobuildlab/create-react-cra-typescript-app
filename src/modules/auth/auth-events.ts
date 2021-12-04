import { createEvent, createStore } from '@cobuildlab/react-simple-state';

export const OnAuthtenticated = createEvent<boolean>({ initialValue: false });
export const OnAuthtenticatedError = createEvent<Error>();

export interface InitialStateType {
  token: null | string;
}

const INITIAL_STATE = {
  token: null,
};

export const tokenStore = createStore<InitialStateType>({
  initialValue: INITIAL_STATE,
});
