import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incremetByAmount} from "./counterSlice"

const Counter = () => {
    const counter = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

    const incrementCounter=()=>{
        dispatch(increment());
    };
    const decrementCounter=()=>{
        dispatch(decrement());
    }

  return (
    <div>Counter{counter}
    <button onClick={incrementCounter}>increment</button>
    <button onClick={decrementCounter}>decrement</button>
    <button onClick={()=>dispatch(incremetByAmount(10))}>Increment</button>
    </div>
  )
}

export default Counter