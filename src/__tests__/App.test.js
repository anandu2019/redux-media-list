import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from '../components/App';
import { movieReducer, songReducer } from '../redux/reducers';

describe('App Component', () => {
  let store;

  beforeEach(() => {
    const rootReducer = combineReducers({
      movies: movieReducer,
      songs: songReducer
    });
    store = createStore(rootReducer);
  });

  test('renders the app with title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Media Management App')).toBeInTheDocument();
  });

  test('renders movies and songs sections', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Songs')).toBeInTheDocument();
  });

  test('can add a movie', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const titleInput = screen.getByTestId('movie-title-input');
    const genreInput = screen.getByTestId('movie-genre-input');
    const addButton = screen.getByTestId('add-movie-btn');

    fireEvent.change(titleInput, { target: { value: 'Inception' } });
    fireEvent.change(genreInput, { target: { value: 'Sci-Fi' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('Genre: Sci-Fi')).toBeInTheDocument();
  });

  test('can add a song', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const titleInput = screen.getByTestId('song-title-input');
    const artistInput = screen.getByTestId('song-artist-input');
    const addButton = screen.getByTestId('add-song-btn');

    fireEvent.change(titleInput, { target: { value: 'Imagine' } });
    fireEvent.change(artistInput, { target: { value: 'John Lennon' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Imagine')).toBeInTheDocument();
    expect(screen.getByText('Artist: John Lennon')).toBeInTheDocument();
  });

  test('clears input fields after adding a movie', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const titleInput = screen.getByTestId('movie-title-input');
    const genreInput = screen.getByTestId('movie-genre-input');
    const addButton = screen.getByTestId('add-movie-btn');

    fireEvent.change(titleInput, { target: { value: 'Inception' } });
    fireEvent.change(genreInput, { target: { value: 'Sci-Fi' } });
    fireEvent.click(addButton);

    expect(titleInput.value).toBe('');
    expect(genreInput.value).toBe('');
  });

  test('displays empty message when no movies', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const movieMessages = screen.getAllByText('No movies added yet');
    expect(movieMessages.length).toBeGreaterThan(0);
  });

  test('displays empty message when no songs', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const songMessages = screen.getAllByText('No songs added yet');
    expect(songMessages.length).toBeGreaterThan(0);
  });
});
