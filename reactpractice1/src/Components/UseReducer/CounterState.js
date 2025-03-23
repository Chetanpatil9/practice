import React from 'react'
import { useState } from 'react'

const CounterState = () => {
    const[Counter,setCounter]=useState(0);

 

return (
 <div>CounterState
      <div style={{color:'red', fontSize:'20px'}}>Counter Value:{Counter}</div> 
      <div><button onClick={()=>(setCounter(Counter+1))}>Increment</button></div> 
      <div><button onClick={()=>(setCounter(Counter-1))}>Decrement</button></div>
     
       


 </div>
)
    
}


export default CounterState