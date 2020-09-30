import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel';
import TopAiring from './components/TopAiring'
import TopUpcoming from './components/TopUpcoming'
import MostFavorite from './components/MostFavorite'
import About from './components/About';



function App() {
    
  return (
    <>
      <div className="App">
        <Navbar />
        <Carousel />
      </div>
      <>
        <TopAiring />
        <TopUpcoming />
        <MostFavorite />
      </>
      <About />
    </>
  );
}

export default App;
