import Axios from 'axios';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { SignInUserActions } from './types';
import { setUserDataAction } from './actions';
import { UsersURL } from '../../constants/AuthAPIValues';

const signInUser = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  SignInUserActions
> => async (dispatch, getState): Promise<void> => {
  try {
    const { token } = getState().authentication;

    const response = await Axios.get(UsersURL, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const { id, display_name: displayName, email } = response.data;
    dispatch(setUserDataAction({ clientId: id, displayName, email }));
  } catch (error) {
    throw new Error(error);
  }
};

export default signInUser;
