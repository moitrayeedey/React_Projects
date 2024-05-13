import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState("#000");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
  return (
    <div className='parent'>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Color Code : {color}</p>
        </div>
        <div className='color-selector'>
            <label> Select Color : </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </div>
  )
}

export default ColorPicker