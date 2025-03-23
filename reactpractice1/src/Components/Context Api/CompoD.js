import React,{useContext} from "react"
import { Data } from "./CompoA"

const CompoD = () => {
    const data=useContext(Data)
    console.log(data);
  return (
    <div>CompoD
      <h1>Ok !! Finally we have our Data:{data}</h1>
    </div>
  )
}

export default CompoD