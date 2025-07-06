import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Markey = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.text',
      { x: '0%' },
      {
        x: '60%',
        duration: 3,
        ease: 'linear',
        repeat: -1,
        repeatRefresh: true,
        repeatDelay: 0,
      }
    );
  }, []);

  return (
    <div className="w-[98%] h-[40vh] flex items-center justify-center bg-[#004D43] rounded-tr-2xl rounded-tl-2xl  overflow-hidden">
      <div className="markey  overflow-x-hidden   border border-t-2 border-b-2 border-zinc-300">
        <div className="text flex items-center justify-center whitespace-nowrap mb-[4vh]  text-white text-center uppercase gap-[4vw] h-fit ">
          <h3 className='uppercase text-[15vw] font-["FounderGrotesque"]'>
            We are OCHI
          </h3>
          <h3 className='uppercase text-[15vw] font-["FounderGrotesque"]'>
            We are Ochi
          </h3>
          <h3 className='uppercase text-[15vw] font-["FounderGrotesque"]'>
            We are Ochi
          </h3>
          <h3 className='uppercase text-[15vw] font-["FounderGrotesque"]'>
            We are Ochi
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Markey;
