import React, { useState } from 'react'

const ControlledCompo = () => {
      const [UserName,setUserName]=useState("");
      const [Name,setName]=useState("");
      const handleSubmit=(e) =>{
        e.preventDefault();
        console.log("UserName is",UserName);
        console.log("Name is",Name);
      }
  return ( 
    <div>ControlledCompo
        Form:
        <div>
            <form onSubmit={handleSubmit}>
              
                <label>UserName</label>
               
                <input type="text" name="username" placeholder="Username" value={UserName} //........this value props is going to take the state variable name (UserName)
                 onChange={(e)=>{setUserName(e.target.value)
                 console.log(e)}} />                   
                                                            
                <label>Name</label>

                <input type="text" name="name" placeholder="name" value={Name} 
                onChange={(e)=>setName(e.target.value)}/>
               
                <input type="submit" value="Submit"/>

            </form>
        </div>
    </div>
  )
}

export default ControlledCompo

                                                                              // onChange provide event handller.                          
                                                                             // (e.prevent Default) <-- It will prevent default behavior of this form element                      
//Line no 20 =>  when we function triggerd in onChange Setter Function Build (e.target.value) <---with this value. It is the Address of this value  /  then [UserName] <-- will update the value in that Variable.