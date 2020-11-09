export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER_DATA = 'SET_USER_DATA';

export interface IUserDataPayload {
  clientId: string;
  email: string;
  displayName: string;
}

export interface IInitialState {
  token: string;
  clientId: string;
  email: string;
  displayName: '';
}

export interface ISetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export interface ISetClientIdAction {
  type: typeof SET_CLIENT_ID;
  payload: string;
}

export interface ISetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: IUserDataPayload;
}

export type SignInUserActions =
  | ISetClientIdAction
  | ISetTokenAction
  | ISetUserDataAction;
