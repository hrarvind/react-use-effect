import logo from './logo.svg';
import UseEffectExample from './UseEffectExample';
import NoEffectExample from './NoEffectExample';
import './App.css';
import { useState } from 'react';

function App() {
  const [isRenderEffect, setIsRenderEffect] = useState(true);
  
  return (
    <div className="App">
      <header className="App-header">
        {isRenderEffect ? (
          <UseEffectExample setIsRenderEffect={setIsRenderEffect}/>
        ) : (
          <NoEffectExample/>
        )}
      </header>
    </div>
  );
}

export default App;
