// src/App.js
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
// import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
          <div className="App">
          {/* <div className="centerline" /> */}

          <div className="content">

            <Header/>
            <About />
            {/* <Portfolio /> */}
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/yearning" element={<Portfolio modalKey="yearning" />} />
            </Routes>
            {/* <MusicPlayer/> */}
            <Footer/>

          </div>
          
        </div>
    </Router>

  );
}

export default App;
