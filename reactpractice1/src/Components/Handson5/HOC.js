import React, { useState } from 'react'

const HOC = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={()=>setCount(count + 1)}Clicked {count}></button>
    </>
  )
}

export default HOC