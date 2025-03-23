import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' //....useNavigation Hooks used

const Home = () => {
  // const name="PrepByte"
    const navigate=useNavigate();
    const HandleNavigate=()=>{      //....1st create one function
      navigate("/pageC",{state:{"Data":"Chetan"}}); //....2nd use this navigate along with navigate SHARE the Data in peace of state and rendering Data Page C.js
    }
  return (
    <div>Home
    <div><Link to="/pageA">Click here to go to:A</Link></div>
    <div><Link to="/pageB">Click here to go to:B</Link></div> 
    <div><Link to="/page">Click here to go to:C</Link></div>
    <div><Link to="/User/Chetan">Click here to go to Chetan</Link></div> 
    <div><Link to="/User/Durgesh">Click here to go to Durgesh</Link></div> 
    <button onClick={HandleNavigate}>Click Me</button>
    </div>
  )   
}



export default Home