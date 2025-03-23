import React,{useState} from 'react'
import HocComponent from './HocComponent'

const ClickCounter = (props) => {
    console.log("props from click counter",props);

    
  return (
    <div>ClickCounter: {props.Counter}
    <div><button onClick={props.updateCounter}>Click !!</button></div>
    </div>
  )
}

export default HocComponent(ClickCounter)   //..passed as an argument