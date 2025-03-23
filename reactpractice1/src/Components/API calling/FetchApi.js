import React,{ useEffect,useState } from 'react'


const FetchApi = () => {
       const [Data,setData]=useState("") 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())                  //....Fetch API store in responce variable  actually this are callback function using fat Arrow function and responce convert the json / object.
        .then(json => {console.log(json)                    //....JSON (Javascript Object Notation) is a lightwieght data-interchange format. it is easy for humans to read and write. // and also All the Final Data is json ok
        setData(json)})
        .catch((err)=>console.log("error is here",err))

    },[])
    

  return (
    <div> <h1>FetchApi</h1> <h2>Welcome To Chetan Browser</h2>
     <div>
           {Data && Data.map((item,index)=>{   // && used we are eterating each and every hole eteration example(name, email, address, etc)/ when Data is inside it true or not (means Data is inside or not) thats why we are using && operator.
            return(         // item :- means that variable is eterate over it.
               
            <li key={index}>{item.name}</li>  // what ever property Store the name, email, address and give output in browser
            )
           })}
     </div>

    </div>
  )
}

export default FetchApi


// Fetch has no url in request object..it's no installation required
// Fetch uses the body property..Fetch does not support upload progress.