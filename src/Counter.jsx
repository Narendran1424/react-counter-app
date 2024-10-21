import React,{useState} from 'react';

function Counter(){
    const[count,setCount]=useState(0);
    
    //increment function
    const increment=()=>{
        setCount(count+1);
        document.querySelector(".count-display").style.color="blue";   //rgba(0, 255, 115, 0.803)
        }

    //decrement function
    const decrement=()=>{
        setCount(count-1);
        document.querySelector(".count-display").style.color="red";
    }

    //reset function
    const reset=()=>{
        setCount(0);
        document.querySelector(".count-display").style.color="black";

    }

    return(
        <div className="counter-container">
            <h1 className="counter-title">Counter App</h1>
            <p className="count-display">{count}</p>
            <button className="counter-button increment" onClick={increment}>Increment</button>
            <button className="counter-button reset" onClick={reset}> Reset</button>
            <button className="counter-button decrement" onClick={decrement}>Decrement</button> 
        </div>
    );
}

export default Counter