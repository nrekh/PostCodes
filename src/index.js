import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postcodes from './Postcodes';
import PostcodeDisplay from './PostcodeDisplay'
import Header from './Header';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Postcodes/>} />
        <Route path="/:postcode" element={<PostcodeDisplay/>} />
      </Routes>
    </BrowserRouter>
);

