import React from 'react'
import LogIn from './LogIn'
import Logout from './Logout'
 const CheckUser = ({User}) => {  // passing props values  // use distructuring ok  and User is a key name 
  if (User===true)
  return <LogIn/>
  else
  return<Logout/>
}
export default CheckUser;