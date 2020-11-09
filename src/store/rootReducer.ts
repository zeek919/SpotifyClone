import { combineReducers } from '@reduxjs/toolkit';
import authenticationReducer from './Authentication/reducer';
import TrackReducer from './Tracks/reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  tracks: TrackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
