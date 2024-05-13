import React, { useState } from 'react'

function Button() {
    const [counter, setCounter] = useState(0);

    const increaseVal = () => {
        if(counter < 100) setCounter(counter+1);
    }
    const resetVal = () => {
        setCounter(0);
    }
    const decreaseVal = () => {
        if(counter > 0) setCounter(counter-1);
    }


  return (
    <>
    <h2> Counter Value : {counter} </h2>
    <div className='buttonContainer'>
      <button onClick={increaseVal}>Increase Value</button>
      <button onClick={resetVal}>Reset</button>
      <button onClick={decreaseVal}>Decrease Value</button>
    </div>
    </>
  )
}

export default Button