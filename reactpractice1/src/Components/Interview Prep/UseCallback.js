import React,{useCallback,useState} from 'react'
import ChildCompo from './ChildCompo';

const UseCallback = () => {
    const [Add,setAdd]=useState(0);
    const memozi=useCallback(function multi(){
        console.log("hey guys i am multiple");
    },[])
  return (
    <>
    <div>UseCallback</div>
    <ChildCompo mulfun={memozi} />
    <h1>{Add}</h1>
    <button onClick={()=>setAdd(Add+1)}>Increment</button>
    </>
  )
}

export default UseCallback