import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({Data}) => {
  return (
    <div>ComponentB:{Data}
    <ComponentC Data={Data}/>
    </div>
  )
}

export default ComponentB