import React,{useState,useMemo} from 'react'

const UseMemo = () => {
    const [Add,setAdd]=useState(0)
    const [Sub,setSub]=useState(0)

const Multiplication=useMemo(function Multi(){
    console.log("*********");
    return Add*10
},[Add])

  return (
    <div>UseMemo:{Multiplication}
        <div>
            <h1>Increment:{Add}</h1>
            <h1>Decrement:{Sub}</h1>
        </div>
        <button onClick={()=>setAdd(Add+1)}>Increment</button>
        <button onClick={()=>setSub(Sub-1)}>Decrement</button>
    </div>
  )
}

export default UseMemo