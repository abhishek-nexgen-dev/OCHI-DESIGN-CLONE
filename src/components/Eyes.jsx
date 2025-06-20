import React from 'react';


const Eyes = () => {
  return (
    <div className="w-full h-screen ">
<div
  className="relative w-full h-full bg-cover bg-no-repeat"
  style={{ backgroundImage: 'url("/src/assets/Top-Viewbbcbv-1-scaled.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}
>
  <div className="absolute w-1/2 top-[40%] left-1/2  -translate-x-[50%] -translate-y-[50%] flex item-center justify-center gap-[3vw]">
  
  <div className="leftEye bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
      <div className="bg-black w-1/2 h-1/2 rounded-full flex items-center justify-center">
       <div className="bg-white w-1/4 h-1/4 rounded-full"></div>
       
       </div>
  </div>

  <div className="RightEye bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
     <div className="bg-black w-1/2 h-1/2 rounded-full flex items-center justify-center">
       <div className="bg-white w-1/4 h-1/4 rounded-full"></div>
       
       </div>
  </div>
  </div>
</div>
    </div>
  );
}

export default Eyes;