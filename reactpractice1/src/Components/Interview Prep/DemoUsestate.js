import React,{useState,useEffect} from 'react'

const DemoUsesate = () => {
    console.log(useState());
    const [value,setValue]=useState("Chetan Hake");

    useEffect(()=>{ // one way to use setter function using setTimeout function
      setTimeout(()=>{
        setValue("Hello Buddies") //...why use setter function it's simple example using (setValue) means setter function.   purpose:- update your initial state.
      },3000)//.....After 6sec render this Hello Buddies Just a Fun.
    },[])

  return (
    <div>DemoUsesate
      <h1 style={{color:'green'}}> {value} </h1>
    </div>
  )
}

export default DemoUsesate




/// useState work properly DONE Example