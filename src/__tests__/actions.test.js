import {
  addMovie,
  removeMovie,
  addSong,
  removeSong,
  ADD_MOVIE,
  REMOVE_MOVIE,
  ADD_SONG,
  REMOVE_SONG
} from '../redux/actions';

describe('Redux Actions', () => {
  describe('Movie Actions', () => {
    test('addMovie should create an action with ADD_MOVIE type', () => {
      const movieData = { title: 'Inception', genre: 'Sci-Fi' };
      const action = addMovie(movieData);

      expect(action.type).toBe(ADD_MOVIE);
      expect(action.payload.title).toBe('Inception');
      expect(action.payload.genre).toBe('Sci-Fi');
      expect(action.payload.id).toBeDefined();
    });

    test('removeMovie should create an action with REMOVE_MOVIE type', () => {
      const movieId = 12345;
      const action = removeMovie(movieId);

      expect(action.type).toBe(REMOVE_MOVIE);
      expect(action.payload).toBe(movieId);
    });
  });

  describe('Song Actions', () => {
    test('addSong should create an action with ADD_SONG type', () => {
      const songData = { title: 'Imagine', artist: 'John Lennon' };
      const action = addSong(songData);

      expect(action.type).toBe(ADD_SONG);
      expect(action.payload.title).toBe('Imagine');
      expect(action.payload.artist).toBe('John Lennon');
      expect(action.payload.id).toBeDefined();
    });

    test('removeSong should create an action with REMOVE_SONG type', () => {
      const songId = 54321;
      const action = removeSong(songId);

      expect(action.type).toBe(REMOVE_SONG);
      expect(action.payload).toBe(songId);
    });
  });
});
