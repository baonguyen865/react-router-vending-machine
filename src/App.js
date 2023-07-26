import React, { Component } from 'react'
import './css/App.css';
import { Route, Routes } from "react-router";
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Sardines from './components/Sardines';
import Chips from './components/Chips';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<VendingMachine/>} />
        <Route exact path="/chips" element={<Chips/>} />
        <Route exact path="/sardines" element={<Sardines/>} />
        <Route exact path="/soda" element={<Soda/>} />
      </Routes>
    </div>
  );
}

export default App;