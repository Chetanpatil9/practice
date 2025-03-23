import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Routing/Home';
import A from '../Routing/A'
import B from '../Routing/B'
import C from '../Routing/C'
import PageNotFound from '../Routing/PageNotFound';
import User from '../Routing/User';

export const RoutingFiles = () => {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pageA" element={<A/>}/>
        <Route path="/pageB" element={<B/>}/>
        <Route path="/pageC" element={<C/>}/>
        <Route path="/User/:Name" element={<User/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes> 
  )
}
