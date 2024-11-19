import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import AppRouter from './Components/route/index'

const images = [
  'https://via.placeholder.com/800x300?text=Image+1',
];

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;