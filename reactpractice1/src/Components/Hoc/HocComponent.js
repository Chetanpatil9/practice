import React,{useState} from 'react'

const HocComponent = (WrappedComponent) => {  //...HocComponent will....received WrappedComponent.
    function Hocfunction(){   //....this function is enhance having WrappedComponent and asign one counter variable and handleClick function
        const [Counter,setCounter]=useState(0)
        const handleClick=()=>{   //...........this are setter function
            setCounter(Counter+1)
    }
    return(        //...wrapped component having pass two things 1st Counter ,2nd updateCounter with help of props
        <div>
            <WrappedComponent Counter={Counter} updateCounter={handleClick}/> 
        </div>    //....inside div passing functionality as props and access this inside my HoverConter.js Component
    )
    }
  return Hocfunction
}

export default HocComponent