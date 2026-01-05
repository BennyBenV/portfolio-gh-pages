// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ProjetList from './components/ProjetList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="hero">
        <Header />
      </div>
      <main>
        <About />
        <ProjetList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
