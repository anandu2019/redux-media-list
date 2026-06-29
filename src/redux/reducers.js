import {
  ADD_MOVIE,
  REMOVE_MOVIE,
  ADD_SONG,
  REMOVE_SONG
} from './actions';

// Initial state
const initialMovieState = {
  movies: []
};

const initialSongState = {
  songs: []
};

// Movie Reducer
export const movieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    default:
      return state;
  }
};

// Song Reducer
export const songReducer = (state = initialSongState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, action.payload]
      };

    case REMOVE_SONG:
      return {
        ...state,
        songs: state.songs.filter(song => song.id !== action.payload)
      };

    default:
      return state;
  }
};
