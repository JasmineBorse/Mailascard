import React, { useState } from 'react';

function TextInput({ onChange }) {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [color, setColor] = useState('#000000');

  const handleTextChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value, font, color);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your message here"
      />
      <select onChange={(e) => setFont(e.target.value)} value={font}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        {/* Add more fonts as needed */}
      </select>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
