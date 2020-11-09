import {
  IInitialState,
  SET_CLIENT_ID,
  SET_TOKEN,
  SET_USER_DATA,
  SignInUserActions,
} from './types';

const initialState: IInitialState = {
  token: '',
  clientId: '',
  email: '',
  displayName: '',
};

const authenticationReducer = (
  state = initialState,
  action: SignInUserActions
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER_DATA: {
      const { clientId, email, displayName } = action.payload;
      return {
        ...state,
        clientId: clientId,
        email: email,
        displayName: displayName,
      };
    }

    case SET_CLIENT_ID:
      return {
        ...state,
        clientId: action.payload,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
