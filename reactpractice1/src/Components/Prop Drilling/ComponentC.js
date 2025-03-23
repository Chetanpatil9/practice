import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = ({Data}) => {
  return (
    <div>ComponentC:{Data}
    <ComponentD Data={Data}/>
    </div>
  )
}

export default ComponentC