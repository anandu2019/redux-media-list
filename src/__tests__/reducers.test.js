import { movieReducer, songReducer } from '../redux/reducers';
import { ADD_MOVIE, REMOVE_MOVIE, ADD_SONG, REMOVE_SONG } from '../redux/actions';

describe('Movie Reducer', () => {
  test('should return initial state', () => {
    const initialState = { movies: [] };
    const action = { type: 'UNKNOWN' };

    const result = movieReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('should handle ADD_MOVIE', () => {
    const initialState = { movies: [] };
    const action = {
      type: ADD_MOVIE,
      payload: { id: 1, title: 'Inception', genre: 'Sci-Fi' }
    };

    const result = movieReducer(initialState, action);
    expect(result.movies).toHaveLength(1);
    expect(result.movies[0].title).toBe('Inception');
  });

  test('should handle multiple ADD_MOVIE actions', () => {
    const initialState = { movies: [] };
    
    const action1 = {
      type: ADD_MOVIE,
      payload: { id: 1, title: 'Inception', genre: 'Sci-Fi' }
    };
    
    let result = movieReducer(initialState, action1);
    
    const action2 = {
      type: ADD_MOVIE,
      payload: { id: 2, title: 'The Matrix', genre: 'Action' }
    };
    
    result = movieReducer(result, action2);
    expect(result.movies).toHaveLength(2);
  });

  test('should handle REMOVE_MOVIE', () => {
    const initialState = {
      movies: [
        { id: 1, title: 'Inception', genre: 'Sci-Fi' },
        { id: 2, title: 'The Matrix', genre: 'Action' }
      ]
    };

    const action = {
      type: REMOVE_MOVIE,
      payload: 1
    };

    const result = movieReducer(initialState, action);
    expect(result.movies).toHaveLength(1);
    expect(result.movies[0].id).toBe(2);
  });

  test('should not mutate the original state on ADD_MOVIE', () => {
    const initialState = { movies: [] };
    const action = {
      type: ADD_MOVIE,
      payload: { id: 1, title: 'Test Movie', genre: 'Test' }
    };

    movieReducer(initialState, action);
    expect(initialState.movies).toHaveLength(0);
  });
});

describe('Song Reducer', () => {
  test('should return initial state', () => {
    const initialState = { songs: [] };
    const action = { type: 'UNKNOWN' };

    const result = songReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  test('should handle ADD_SONG', () => {
    const initialState = { songs: [] };
    const action = {
      type: ADD_SONG,
      payload: { id: 1, title: 'Imagine', artist: 'John Lennon' }
    };

    const result = songReducer(initialState, action);
    expect(result.songs).toHaveLength(1);
    expect(result.songs[0].title).toBe('Imagine');
  });

  test('should handle multiple ADD_SONG actions', () => {
    const initialState = { songs: [] };
    
    const action1 = {
      type: ADD_SONG,
      payload: { id: 1, title: 'Imagine', artist: 'John Lennon' }
    };
    
    let result = songReducer(initialState, action1);
    
    const action2 = {
      type: ADD_SONG,
      payload: { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen' }
    };
    
    result = songReducer(result, action2);
    expect(result.songs).toHaveLength(2);
  });

  test('should handle REMOVE_SONG', () => {
    const initialState = {
      songs: [
        { id: 1, title: 'Imagine', artist: 'John Lennon' },
        { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen' }
      ]
    };

    const action = {
      type: REMOVE_SONG,
      payload: 1
    };

    const result = songReducer(initialState, action);
    expect(result.songs).toHaveLength(1);
    expect(result.songs[0].id).toBe(2);
  });

  test('should not mutate the original state on ADD_SONG', () => {
    const initialState = { songs: [] };
    const action = {
      type: ADD_SONG,
      payload: { id: 1, title: 'Test Song', artist: 'Test Artist' }
    };

    songReducer(initialState, action);
    expect(initialState.songs).toHaveLength(0);
  });
});
