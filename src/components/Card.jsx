import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Card = ({ Title, Image_Url, CardHoverText  , Split_Text}) => {
  let Card_Ref = React.useRef(null);

  let Handle_Card_Mouse_Enter = () => {
    gsap.to(Card_Ref.current, {
      scale: 0.96,

      ease: 'power1.inOut',
    });
  };

  let Handle_Card_Mouse_Leave = () => {
    gsap.to(Card_Ref.current, {
      scale: 1,

      ease: 'power1.inOut',
    });
  };

  useGSAP(() => {}, []);
  return (
    <div className="Card_Container w-[48%] h-[90vh] font-[NeueMontriyan] relative">
      <div className="Title_Container flex items-baseline justify-center top-1/2 
      
      absolute transform translateX-1/2  
      translateY-1/2  z-30 w-full bg-red-700">
        <h1 className="text-[#CDEA68] font-semibold text-[12vh]">
          {String(Split_Text).split('').map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-transform duration-300 ease-in-out transform `}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="Title w-full h-[10%] flex items-center gap-5">
        <div className="Circle rounded-full bg-black w-3 h-3 "></div>
        <p className="text-xl">{Title}</p>
      </div>
      <div
        className="Card h-[90%] w-full rounded-2xl"
        ref={Card_Ref}
        onMouseEnter={Handle_Card_Mouse_Enter}
        onMouseLeave={Handle_Card_Mouse_Leave}
      >
        <img
          className="w-full h-full bg-cover rounded-2xl"
          src={Image_Url}

          alt={Title}
      
        />
      </div>
    </div>
  );
};

export default Card;
