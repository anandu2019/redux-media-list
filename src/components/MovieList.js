import React from 'react';

const MovieList = ({ movies, onRemove }) => {
  return (
    <div className="list-container">
      {movies.length === 0 ? (
        <p className="empty-message">No movies added yet</p>
      ) : (
        <ul data-testid="movie-list">
          {movies.map(movie => (
            <li key={movie.id} className="list-item" data-testid={`movie-item-${movie.id}`}>
              <div className="item-content">
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
              </div>
              <button
                onClick={() => onRemove(movie.id)}
                className="delete-btn"
                data-testid={`delete-movie-${movie.id}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
