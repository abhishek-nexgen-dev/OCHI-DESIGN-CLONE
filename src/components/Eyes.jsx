import React, { useEffect } from 'react';

const Eyes = () => {
  const [rotation, setRotation] = React.useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      console.log(e.clientX, e.clientY);
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI); // Convert radians to degrees
      angle = angle < 0 ? angle + 360 : angle; // Normalize angle to be between 0 and 360 degrees
      console.log(angle);
      setRotation(angle - 180); // Adjust the angle to match the rotation of the eyes
      console.log(rotation);
    });
  }, []);

  return (
    <div className="w-full h-screen ">
      <div
        className="relative w-full h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/src/assets/Top-Viewbbcbv-1-scaled.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute w-1/2 top-[40%] left-1/2  -translate-x-[50%] -translate-y-[50%] flex item-center justify-center gap-[3vw]">
          <div className="leftEye bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
            <div className="bg-black w-1/2 h-1/2 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotation}deg)`,
                }}
                className="Line  w-full h-10 absolute top-1/2 left-1/2 transform -translate-x-[4%] -translate-y-1/2"
              >
                <div className="bg-white w-10 h-10 rounded-full mix-blend-difference"></div>
              </div>
            </div>
          </div>

          <div className="RightEye bg-white w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
            <div className="bg-black w-1/2 h-1/2 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotation}deg)`,
                }}
                className="Line  w-full h-10 absolute top-1/2 left-1/2 transform-3d -translate-x-[4%] -translate-y-1/2"
              >
                <div className="bg-white w-10 h-10 rounded-full mix-blend-difference"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
