import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, addSong, removeSong } from '../redux/actions';
import MovieList from './MovieList';
import SongList from './SongList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const songs = useSelector(state => state.songs.songs);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (movieTitle.trim() && movieGenre.trim()) {
      dispatch(addMovie({ title: movieTitle, genre: movieGenre }));
      setMovieTitle('');
      setMovieGenre('');
    }
  };

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  const handleAddSong = (e) => {
    e.preventDefault();
    if (songTitle.trim() && songArtist.trim()) {
      dispatch(addSong({ title: songTitle, artist: songArtist }));
      setSongTitle('');
      setSongArtist('');
    }
  };

  const handleRemoveSong = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <div className="app-container">
      <h1>Media Management App</h1>
      
      <div className="content">
        <div className="section">
          <h2>Movies</h2>
          <form onSubmit={handleAddMovie}>
            <input
              type="text"
              placeholder="Movie title"
              value={movieTitle}
              onChange={(e) => setMovieTitle(e.target.value)}
              data-testid="movie-title-input"
            />
            <input
              type="text"
              placeholder="Genre"
              value={movieGenre}
              onChange={(e) => setMovieGenre(e.target.value)}
              data-testid="movie-genre-input"
            />
            <button type="submit" data-testid="add-movie-btn">Add Movie</button>
          </form>
          <MovieList movies={movies} onRemove={handleRemoveMovie} />
        </div>

        <div className="section">
          <h2>Songs</h2>
          <form onSubmit={handleAddSong}>
            <input
              type="text"
              placeholder="Song title"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              data-testid="song-title-input"
            />
            <input
              type="text"
              placeholder="Artist"
              value={songArtist}
              onChange={(e) => setSongArtist(e.target.value)}
              data-testid="song-artist-input"
            />
            <button type="submit" data-testid="add-song-btn">Add Song</button>
          </form>
          <SongList songs={songs} onRemove={handleRemoveSong} />
        </div>
      </div>
    </div>
  );
};

export default App;
