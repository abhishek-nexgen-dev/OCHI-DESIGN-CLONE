import React from 'react';

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Markey from './components/Markey';
import About from './components/About';
let App = () => {
  return (
    <div className="w-screen  bg-[#f2f2f2] flex flex-col ">
      <NavBar />
      <LandingPage />
      <Markey />
      <About />
    </div>
  );
};

export default App;
