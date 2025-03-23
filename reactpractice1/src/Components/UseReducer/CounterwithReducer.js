import React,{useReducer} from 'react'

const initialState=0;
const reducer=(state,action)=>{  // reducer is a function
switch(action){
    case "Increment":
       return state + 1 
    case "Decrement":
        return state - 1 
    case "Multiplication":
        return state*2    
    default:
        return state    
}
}
const CounterwithReducer = () => {
    const [Count,dispatch] = useReducer(reducer,initialState)  // count is a initial state  and dispatch is action it
  return (
    <div>CounterwithReducer: {Count}
    <button onClick={()=>dispatch("Increment")}>Increment!!</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement!!</button>
    <button onClick={()=>dispatch("Multiplication")}>Multiplication</button>
    </div>
  )
}

export default CounterwithReducer


/// DONE Example Interview 