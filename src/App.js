// src/App.js
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';


// Components
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
// import MusicPlayer from './components/MusicPlayer';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
          <div className="App">
          {/* <div className="centerline" /> */}

          <div className="content">

            <Header/>
            <About />

            <Routes>
              <Route path="/" element={
                <>
                  <Contact/>
                  <Portfolio/>
                </>
              } />
              <Route path="/yearning" element={
                <>
                  <Contact/>
                  <Portfolio modalKey="yearning" />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <Contact forceOpen={1} />
                  <Portfolio /> 
                </>
              } />
              <Route path="*" element={
                <>
                  <Contact/>
                  <Portfolio />
                </>
              } />
            </Routes>

            {/* <MusicPlayer/> */}
            <Footer/>

          </div>
          
        </div>
    </Router>

  );
}

export default App;
