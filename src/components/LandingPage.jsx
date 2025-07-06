import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import LandingPageImage from '../assets/LandingPage.jpeg';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
  let ImageRef = React.useRef();
  let text2Ref = React.useRef();
  let StartProjectRef = React.useRef();
  let InnerCircleRef = React.useRef();
  let OuterCircleRef = React.useRef();

  let circleMouseEnter = () => {
    gsap.to(InnerCircleRef.current, {
      width: '100%',
      height: '100%',
      opacity: 1,
      backgroundColor: '#000',
      ease: 'power2.in',
      duration: 0.3,
      transition: 'all 0.3s ease-in-out',
      borderRadius: '50%',
    });

    gsap.to('.arrow-icon', {
      color: '#fff',
    });

    gsap.to(StartProjectRef.current, {
      backgroundColor: '#000',
      color: 'white',
      fontWeight: 400,
      duration: 0,
    });
  };

  let circleMouseLeave = () => {
    gsap.to(StartProjectRef.current, {
      backgroundColor: 'transparent',
      color: 'black',
      fontWeight: 400,
      duration: 0,
    });

    gsap.to('.arrow-icon', {
      color: '#000',
    });

    gsap.to(InnerCircleRef.current, {
      width: '0px',
      height: '0px',
      duration: 0,
    });
  };

  let ProjectMouseEnter = () => {
    gsap.to(StartProjectRef.current, {
      backgroundColor: '#000',
      color: 'white',
      fontWeight: 400,
      duration: 0,
    });
  };

  let ProjectMouseLeave = () => {
    gsap.to(StartProjectRef.current, {
      backgroundColor: 'transparent',
      color: 'black',
      fontWeight: 400,
      duration: 0,
    });
  };

  useGSAP(() => {
    gsap.to(ImageRef.current, {
      width: '10%',
      duration: 1,
      delay: 0.5,
      animationTimingFunction: 'ease-in-out',
      ease: 'power2.out',
    });

    if (StartProjectRef.current) {
      StartProjectRef.current.addEventListener('mouseenter', () => {
        circleMouseEnter();

        ProjectMouseEnter();
      });

      StartProjectRef.current.addEventListener('mouseleave', () => {
        circleMouseLeave();

        ProjectMouseLeave();
      });
    }

    if (OuterCircleRef.current) {
      OuterCircleRef.current.addEventListener('mouseenter', () => {
        circleMouseEnter();
      });

      OuterCircleRef.current.addEventListener('mouseleave', () => {
        circleMouseLeave();
        projectMouseLeave();
      });
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-[#f2f2f2] flex flex-col overflow-hidden">
      <div
        className="text-structure  px-[2vw] py-[2vw] flex flex-col justify-center w-full
      h-[60%]  min-[700px]:h-[82%] relative"
      >
        <div className="masker font-[FounderGrotesque]">
          <h1 className="text-[4rem] min-[700px]:text-[9vw] uppercase leading-1">
            We Create
          </h1>
        </div>

        <div className="masker font-[FounderGrotesque] flex h-fit">
          <h1 className="text-[4rem] min-[700px]:text-[9vw] uppercase flex items-center w-full">
            <img
              src={LandingPageImage}
              ref={ImageRef}
              alt=""
              className="h-[42%] rounded-md w-[0%] mr-[1vw]"
            />
            <span className="mb-[1vh]" ref={text2Ref}>
              eye-opening
            </span>
          </h1>
        </div>

        <div className="masker font-[FounderGrotesque]">
          <h1 className="text-[4rem] min-[700px]:text-[9vw]  uppercase leading-1">
            presentations
          </h1>
        </div>
      </div>

      <div className="w-full h-[40%] min-[700px]:h-[18%] px-[2.5vw] py-[3vh]  flex flex-col min-[700px]:flex-row gap-[3vh] min-[700px]:gap-0 min-[700px]:justify-between font-light border-t border-zinc-500">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <div className="w-[20%] flex h-[5vh]">
          <button
            ref={StartProjectRef}
            className="border-1 rounded-3xl border-black px-[1vw] py-[0.5vh] uppercase text-[1.2vw]"
          >
            Start The Project{' '}
          </button>
          <div
            ref={OuterCircleRef}
            className="Outer_Circle relative border-[1px] border-black rounded-full w-[2.5vw] h-full ml-2 flex items-center justify-center"
          >
            <div
              ref={InnerCircleRef}
              className="Inner_Circle bg-black  absolute z-10"
            ></div>
            <FaArrowUpLong className="arrow-icon text-[1.3vw] rotate-[25deg] absolute z-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
