import React,{createContext} from 'react' // 1st step import the {createContext}
import ComponentB from './ComponentB'

const Data=createContext(); //..........create local context from the Data name giving us Data its used to super power using Component (Data.Provider).

const ComponentA = () => {
  // console.log(Data);  
  const name = "chetan"  //...IMP...Share this variable name = "Chetan"

  return (             //.... 2nd step Provider makes used component as a provider
    <div>ComponentA:{name} 
      <Data.Provider value={name}> 
         <ComponentB/>
      </Data.Provider> 
    </div>
  )
}

export default ComponentA
export {Data}; //............step 4th using data exportable 