import React from 'react';



import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
let App = () => {
  return (
  
    <div className="w-screen h-screen bg-[#f2f2f2] flex flex-col ">
    <NavBar />
    <LandingPage />

    </div>
 
  );
}

export default App;