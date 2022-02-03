
import { useState } from 'react';
import './App.css';
import Fcomponent from './Fcomponent';

import { CounterContext } from './CounterContext';

function App() {

  const [counter,setCounter] = useState(0);

  const increment = ()=>{
    setCounter(counter + 1);
  }
 
  const decrement = ()=>{
    setCounter(counter - 1);
  }

  return (
    <div className="App">

      <div className="appBorder">
        <h1>App Component</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <hr />  
        <CounterContext.Provider value={{counter,setCounter}}  >

       
        <Fcomponent/>

        <hr />

        
        
        </CounterContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
