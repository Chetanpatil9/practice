import React, { useContext } from 'react' //....1st import Context using {useContext} in react.
import { Data } from './ComponentA'   //....import the data.

const ComponentD = () => {
     const data=useContext(Data)  //....Then simply pass the useContext to Context. This will Hooks going to do. and finally access that variable value.
     console.log(data);

  return (
    <div>ComponentD
        <h1>Ok!! Finally we have our Data:{data}</h1> 
    </div>
  )
}

export default ComponentD