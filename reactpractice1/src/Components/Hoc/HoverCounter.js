import React,{useState} from 'react'
import HocComponent from './HocComponent'

const HoverCounter = (props) => { //...access with the help of props 
//   console.log(props);
//   const Counter=props.Counter;  //...take out this Counter vatiable from props 
  return (
    <div>HoverCounter:{props.Counter}
    <div><button onMouseOver={props.updateCounter}>Click!!</button></div>
    </div>
  )
}

export default HocComponent(HoverCounter) //...here as as HoverCounter passing as a argument to HocComponent 