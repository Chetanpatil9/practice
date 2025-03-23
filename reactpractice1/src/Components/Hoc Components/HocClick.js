import React from 'react'
import HocCompo from './HocCompo';

const HocClick = (props) => {
    console.log("props from click counter",props);
  return (
    <div>HocClick:{props.Counter}
    <div><button onClick={props.updateCounter}>Click !!</button></div>
    </div>
  )
}

export default HocCompo(HocClick)