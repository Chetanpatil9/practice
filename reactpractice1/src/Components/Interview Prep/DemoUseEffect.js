import React, {useEffect,useState} from 'react'

const DemoUseEffect = () => {
    const [value,setValue]=useState(0)  //calling setter function

    useEffect(()=>{
      console.log("Hello i am useEffect");
    },[])


    // useEffect(()=>{
    //       console.log("Component Mount here...");  // "hello i am useEffect" its use Show only useEffect example ok.
    //       return()=>{
    //         console.log("Clean up here...");  //
    //       }
    // },[value]) // adding []-> 1st case:- show console.log value and (ComponentDidMount) ok and 2nd case:- not use run again and again  // 3rd case :-after passing dependancy (means ComponentDitupdate)value useEffect will executed  //use life cycle 3 methods

    return (
    <>
    <div>DemoUseEffect: {value}</div>
    <button onClick={()=>setValue(value+1)}>Increment</button>
    </>
  )
}

export default DemoUseEffect

// fkt useEffect vapraychay ok useStae vapralay karan didMount,update,Mount show kraych hott ok

// useEffect Hook use in Functional Component 
// also useEffect use in 3 life Cycle method to clean up..
// in Class component use unMount he check krshil ekda confirm


// Cross questions
// how many argument in ? :- useEffect callback etc,
// what was adding dependancy ? 
// how to use blank dependancy array? :- means no rendered again  and again  // and use inside value in dependancy array means initial rendering value ok