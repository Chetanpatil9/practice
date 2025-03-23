import React,{useState} from 'react'
import HocCompo from './HocCompo'

const HocHover = (props) => {

  return (
    <div>HocHover:{props.Counter}
    <div><button onMouseOver={props.updateCounter}>Click !!</button></div>
    </div>
  )
}

export default HocCompo(HocHover)