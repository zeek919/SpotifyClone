export const GET_PHRASE_DATA = 'GET_PHRASE_DATA';

export interface IInitialState {
  albums: object;
  artists: object;
  playlists: object;
  tracks: object;
  shows: object;
  episodes: object;
}

export interface IGetSearchedPhraseData {
  type: typeof GET_PHRASE_DATA;
  payload: IInitialState;
}

export type TracksActions = IGetSearchedPhraseData;
