import { GET_PHRASE_DATA, IInitialState, TracksActions } from './types';

const initialState: IInitialState = {
  albums: {},
  artists: {},
  playlists: {},
  tracks: {},
  shows: {},
  episodes: {},
};

const TrackReducer = (state = initialState, action: TracksActions) => {
  switch (action.type) {
    case GET_PHRASE_DATA: {
      const { payload } = action;
      return {
        ...state,
        albums: payload.albums,
        artists: payload.artists,
        playlists: payload.playlists,
        tracks: payload.tracks,
        shows: payload.shows,
        episodes: payload.episodes,
      };
    }

    default:
      return state;
  }
};

export default TrackReducer;
