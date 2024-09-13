import React, { useState } from 'react';

function GifSelector({ onSelect }) {
  const [selectedGif, setSelectedGif] = useState('');

  const handleSelect = (gif) => {
    setSelectedGif(gif);
    onSelect(gif);
  };

  return (
    <div>
      <img
        src="https://media.giphy.com/media/3o6Zt6D4rQFzsbqU4c/giphy.gif"
        alt="example gif"
        onClick={() => handleSelect('https://media.giphy.com/media/3o6Zt6D4rQFzsbqU4c/giphy.gif')}
      />
      {/* Add more GIF options as needed */}
      <div>Selected GIF: <img src={selectedGif} alt="selected gif" /></div>
    </div>
  );
}

export default GifSelector;
