import React, { useState } from 'react';
import TextInput from './components/TextInput';
import GifSelector from './components/GifSelector';
import SongInput from './components/SongInput';
import Preview from './components/Preview';

function App() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [color, setColor] = useState('#000000');
  const [gif, setGif] = useState('');
  const [song, setSong] = useState('');

  return (
    <div>
      <h1>MailasCard</h1>
      <TextInput onChange={(text, font, color) => {
        setText(text);
        setFont(font);
        setColor(color);
      }} />
      <GifSelector onSelect={(gif) => setGif(gif)} />
      <SongInput onAddSong={(song) => setSong(song)} />
      <Preview text={text} font={font} color={color} gif={gif} song={song} />
    </div>
  );
}

export default App;

