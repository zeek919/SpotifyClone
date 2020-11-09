import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';
import { TracksActions } from './types';
import { Core } from '../../constants/TracksAPIValues';
import Axios from 'axios';
import { GetSearchedPhraseData } from './actions';

const getSingleTrack = (
  phrase: string
): ThunkAction<Promise<void>, RootState, unknown, TracksActions> => async (
  dispatch,
  getState
): Promise<void> => {
  try {
    const { token } = getState().authentication;
    const foundedResults = await Axios.get(
      `${Core}?q=${phrase}&type=album,artist,playlist,track,show,episode&market=PL&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(foundedResults);

    dispatch(GetSearchedPhraseData(foundedResults.data));
  } catch (e) {
    throw new Error(e);
  }
};

export default getSingleTrack;
