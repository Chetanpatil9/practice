import React from 'react'
import { useLocation } from 'react-router-dom'

const C = () => { 
  const location=useLocation();
  console.log(location);   //..........This is work Get the Data.

   
  return (
    <div>C
      {location.state.Data}
    </div>
  )
}

export default C