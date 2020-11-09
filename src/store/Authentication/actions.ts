import {
  SignInUserActions,
  SET_CLIENT_ID,
  SET_TOKEN,
  SET_USER_DATA,
  IUserDataPayload,
} from './types';
import { ActionCreator } from '@reduxjs/toolkit';

export const setClientIdAction: ActionCreator<SignInUserActions> = (
  item: string
) => ({
  type: SET_CLIENT_ID,
  payload: item,
});

export const setTokenAction: ActionCreator<SignInUserActions> = (
  item: string
) => ({
  type: SET_TOKEN,
  payload: item,
});

export const setUserDataAction: ActionCreator<SignInUserActions> = (
  item: IUserDataPayload
) => ({
  type: SET_USER_DATA,
  payload: item,
});
