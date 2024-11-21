import React from 'react';
import './App.css';
import NavBar from './components/nav';
import AppRouter from './components/route/index';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;