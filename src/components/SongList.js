import React from 'react';

const SongList = ({ songs, onRemove }) => {
  return (
    <div className="list-container">
      {songs.length === 0 ? (
        <p className="empty-message">No songs added yet</p>
      ) : (
        <ul data-testid="song-list">
          {songs.map(song => (
            <li key={song.id} className="list-item" data-testid={`song-item-${song.id}`}>
              <div className="item-content">
                <h3>{song.title}</h3>
                <p>Artist: {song.artist}</p>
              </div>
              <button
                onClick={() => onRemove(song.id)}
                className="delete-btn"
                data-testid={`delete-song-${song.id}`}
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

export default SongList;
