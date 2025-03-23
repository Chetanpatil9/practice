import React, { useCallback, useState } from 'react'
import ChildCompo from './ChildCompo';

const OptUseCallback = () => {
  const [Add,setAdd]=useState(0);
  const multi=()=>{
    console.log("hlw guys...I am multiple");
  }
  const memozi=useCallback(function multi(){
    console.log("hey guys i am multiple");
  },[])
  return (
    <div>OptUseCallback
      <div>
        <ChildCompo mulfun={memozi} sval={Add}/>
        <h1>{Add}</h1>
        <button onClick={()=>setAdd(Add+1)}>Increment!!</button>
      </div>
    </div>
  )
}

export default OptUseCallback