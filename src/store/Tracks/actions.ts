import { ActionCreator } from '@reduxjs/toolkit';
import {
  GET_PHRASE_DATA,
  IGetSearchedPhraseData,
  IInitialState,
} from './types';

export const GetSearchedPhraseData: ActionCreator<IGetSearchedPhraseData> = (
  item: IInitialState
) => ({
  type: GET_PHRASE_DATA,
  payload: item,
});
