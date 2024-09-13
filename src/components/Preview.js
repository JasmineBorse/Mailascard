// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import GifSelector from './components/GifSelector';
import SongInput from './components/SongInput';
import Preview from './components/Preview';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [color, setColor] = useState('#000000');
  const [gif, setGif] = useState('');
  const [song, setSong] = useState('');

  return (
    <div className="container">
      <Header />
      <TextInput onChange={(text, font, color) => {
        setText(text);
        setFont(font);
        setColor(color);
      }} />
      <GifSelector onSelect={(gif) => setGif(gif)} />
      <SongInput onAddSong={(song) => setSong(song)} />
      <Preview text={text} font={font} color={color} gif={gif} song={song} />
      <Footer />
    </div>
  );
}

export default App;
