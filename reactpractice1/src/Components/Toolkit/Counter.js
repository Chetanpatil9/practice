import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, incrementByAmount } from "./counterSlice"

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <>
    <div style={{ fontSize: "50px"}}>Counter {counter}</div>

    <button style={{ fontSize: "50px"}} onClick={incrementCounter}>increment</button>
     
    <button style={{ fontSize: "50px"}} onClick={decrementCounter}>decrement</button>

    <button style={{ fontSize: "50px"}} onClick={()=> dispatch(incrementByAmount(10))}>increment</button>

    </>
    );
};

export default Counter