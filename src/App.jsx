import React from 'react';
import {  Routes, Route } from "react-router-dom";
import HomeTwo from './pages/HomeTwo';
import Philosophy from './pages/Philosophy';
import Subscription from './pages/Subscription';
import Storage from './pages/Storage';
import StorageTwo from './pages/StorageTwo';
import Verfiaction from './pages/Verifiacation';
import Esign from './pages/Esign';
import Pricing from './pages/Pricing';

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<HomeTwo/>} />
        <Route path="/philosophy" element={<Philosophy/>} />   
        <Route path="/subscription" element={<Subscription/>} />
        <Route path="/storage" element={<Storage/>} />
        <Route path="/storage-pricing" element={<StorageTwo/>} />
        <Route path="/verification" element={<Verfiaction/>} />
        <Route path="/esign" element={<Esign/>} />
        <Route path="/pricing" element={<Pricing/>} />
    </Routes>
  )
}

export default App
