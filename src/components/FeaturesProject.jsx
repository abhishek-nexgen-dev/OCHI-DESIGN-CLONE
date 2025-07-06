import React from 'react';
import Card from './Card';

const FeaturesProject = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full flex items-center  h-[18vh] text-black border-b-[1px] p-[2.8vw] ">
        <h1 className="text-[2.8vw] font-[NeueMontriyan] ">Features Projects</h1>
      </div>
      <div className="h-screen w-screen flex gap-[2vw] flex-wrap items-center justify-center relative">
      
        <Card
        
          Title="AH2 & Matt Horn"
          Image_Url="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
        />
        <Card
          Title="Fyde"
          Image_Url="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
        />
      </div>

      <div className="h-screen w-screen flex gap-[2vw] flex-wrap items-center justify-center relative">
        <div className="Title_Container flex items-baseline justify-center absolute transform translateX-1/2  translateY-1/2  z-30 w-full bg-red-700">
        <h1 className='text-[#CDEA68] font-semibold text-[12vh]'>
          
        
        </h1>
        </div>
        <Card
          Title="AH2 & Matt Horn"
          Image_Url="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
        />
        <Card
          Title="Fyde"
          Image_Url="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
        />
      </div>



      <div className="h-screen w-screen flex gap-[2vw] flex-wrap items-center justify-center relative">
    
        <Card
          Title="AH2 & Matt Horn"
          Image_Url="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
        />
        <Card
          Title="Fyde"
          Image_Url="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
        />
      </div>



      <div className="h-screen w-screen flex gap-[2vw] flex-wrap items-center justify-center relative">
       
        <Card
          Title="AH2 & Matt Horn"
          Image_Url="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
        />
        <Card
          Title="Fyde"
          Image_Url="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
        />
      </div>


      <div className="h-screen w-screen flex gap-[2vw] flex-wrap items-center  relative">
       
        <Card
          Title="AH2 & Matt Horn"
          Image_Url="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
        />
      
      </div>
    </div>
  );
};

export default FeaturesProject;
