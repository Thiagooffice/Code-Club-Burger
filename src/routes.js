import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Requests from './pages/Requests';
import Home from './pages/Home'

export default function Routers() {
 return (
   <BrowserRouter>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/requests" element={<Requests/>}/>
   </Routes>
   </BrowserRouter>
 );
}