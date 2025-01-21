import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    alert("You clicked this button");
    setCounter(counter + 1); 
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        
        
        <p>This is an image placeholder</p>
        
        
        <button onClick={handleButtonClick}>Click Me</button>
        
        
        <p>You clicked this button {counter} times</p>
      </header>
    </div>
  );
}

export default App;
