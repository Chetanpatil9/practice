import React,{useState} from 'react'

const StateLiftingUp = (props) => { //....Reciving the data (props) using Child component.
    const [name,setName]=useState("")  //...using state variable.
    const HandleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name); //...This value is Child component it accsess parent component using App.js using Callback Function.
        // console.log(props); //...we are console in props object means what we are exactly getting.
        props.getName(name);
    }
  return (
    <div>StateLiftingUp
        <form>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={HandleSubmit}>Click Me!</button>
        </form>
    </div>
  )
}

export default StateLiftingUp