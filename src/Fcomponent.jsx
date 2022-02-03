import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import './Fcomponent.css';
const Fcomponent = ()=>{

    const {counter , setCounter}= useContext(CounterContext);

    
    const Fchild = ()=>{
        return (
            <div className='border'>
                <h1>Function Child Component</h1>
                <h2>{counter}</h2>
                <button onClick={()=>setCounter(counter-1)}>Decrement</button>

            </div>
            
        );
    }

    return (
        <div className='border'>
            <h1>Functional Component</h1>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <hr /> 
            <Fchild/>

            
        </div>
    )




}

export default Fcomponent;