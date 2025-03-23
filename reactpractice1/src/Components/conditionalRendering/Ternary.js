import React from 'react'

const Ternary = () => {
    const Consistency=true;  // Consistency is a variable is boolean value used to true or false
  return (
    <div>Ternary
        
        <div>
            this is example of Ternary Operatore
        </div>
        {Consistency?<div style={{backgroundColor:'green',color:'red'}}>You will get Placed</div>:<div style={{backgroundColor:'red',color:'green'}}>Try one More time</div> } 
        {Consistency && <div>You are good to go!</div>}
        
  

    </div>
  )
}

export default Ternary