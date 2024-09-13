import React, { useState } from 'react';

function SongInput({ onAddSong }) {
  const [songUrl, setSongUrl] = useState('');

  const handleAddSong = () => {
    onAddSong(songUrl);
  };

  return (
    <div>
      <input
        type="text"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
        placeholder="Enter Spotify song URL"
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
}

export default SongInput;
