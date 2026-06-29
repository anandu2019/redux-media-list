// Action Types
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

// Movie Actions
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: {
      id: Date.now(),
      ...movie
    }
  };
};

export const removeMovie = (id) => {
  return {
    type: REMOVE_MOVIE,
    payload: id
  };
};

// Song Actions
export const addSong = (song) => {
  return {
    type: ADD_SONG,
    payload: {
      id: Date.now(),
      ...song
    }
  };
};

export const removeSong = (id) => {
  return {
    type: REMOVE_SONG,
    payload: id
  };
};
