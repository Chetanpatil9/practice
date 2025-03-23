import { createContext } from 'react'
import CompoB from './CompoB'

const Data=createContext();

const CompoA = () => {

    const name = "chetan"
  return (
    <div>CompoA: {name}
        <Data.Provider value={name}>
            <CompoB/>
        </Data.Provider>
    </div>
  )
}

export default CompoA
export {Data}