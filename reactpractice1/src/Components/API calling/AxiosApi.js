import React, {useEffect, useState} from 'react'
import axios from 'axios'                      

const AxiosApi = () => {
  const [Data,setData]=useState("")    // using state variable it means manage our state inside function component.
  useEffect(()=>{                                              // useEffect :- To manage side effect's like API Calls, Subcription, etc.
     axios.get("https://jsonplaceholder.typicode.com/users/")
     .then((res)=>{console.log(res)                           // using responce variable.
      setData(res.data)})                                   // To Store the Data.
      .catch((err)=>console.log(err))

  },[])  // Blank array dependency used beacuse Rendering component in one time not used again and again.
  return (
    <div> <h1>AxiosApi</h1>
      <h2>Welcome To Chetan Browser</h2>
      <div>
            {
                Data && Data.map((item,index)=>{            //map use beacuse rendering each item like any Data using name, email for multiple things all about JS.
                    return(
                        <li key = {index}>{item.name}</li>
                    )
                })}
        </div>

      
    </div>
  )
}

export default AxiosApi




// Q. Why we Choose Axios :- 
// Ans :- axios is stand alone third party package that can easily install.
// axios no nead to convert json format, it's a Javascript notation format sharing over data in universal format. 


// Q. How to install axios :-
// Ans:- npm install axios