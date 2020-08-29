import React, { useState } from 'react';
import StyledText from '../styled-text'
import './styles.css'

function TextMaker() {
    const [input, setInput] = useState();
    const [color, setColor] = useState('black');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className="text-maker">
            <label>Enter Text Here:</label>
            <input type="text" onChange={handleInputChange} />
            <div className="button-container">
                <button value="red" onClick={handleColorChange}>Red</button>
                <button value="blue" onClick={handleColorChange}>Blue</button>
                <button value="green" onClick={handleColorChange}>Green</button>
                <button value="black" onClick={handleColorChange}>Black</button>
            </div>
            <StyledText text={input} color={color} />
        </div>
    );
}

export default TextMaker;
