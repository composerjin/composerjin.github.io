// src/App.js
import './App.css';

// Components
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';


function App() {

  return (
    
    <div className="App">
      {/* <div className="centerline" /> */}

      <div className="content">

        <Header/>
        <About />
        <Portfolio />
        {/* <MusicPlayer/> */}
        <Footer/>

      </div>
      
    </div>
  );
}

export default App;
