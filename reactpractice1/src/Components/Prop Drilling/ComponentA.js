import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = ({Data}) => {
  return (
    <div>ComponentA:{Data}
    <ComponentB Data={Data}/>
    </div>
  )
}

export default ComponentA