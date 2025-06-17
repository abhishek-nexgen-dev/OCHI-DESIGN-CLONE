import React from 'react';
import logo from '../assets/logo.svg';

const NavBar = () => {
  return (
    <nav className="w-full h-[10vh] fixed px-9 py-1 flex justify-between items-center font-['NeueMontriyan', monospace] z-30">
      <div className="nav-part1  h-full w-[15%] flex items-center">
        <img src={logo} alt="Logo" className="h-[60%] object-contain " />
      </div>
      <div className="nav-part2  flex-[2] h-full flex items-center justify-end">
        {['Services', 'Our Word', 'About Us', 'Insights', 'Contact'].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className={`text-md text-black mx-4 ${index == 4 && 'ml-[12vw]'} hover:text-yellow-600 transition-all duration-300`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default NavBar;
