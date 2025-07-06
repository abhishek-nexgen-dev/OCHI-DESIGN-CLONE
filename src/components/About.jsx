import React from 'react';

const About = () => {
  return (
    <div className="w-full min-[995px]:h-[200vh] flex flex-col  bg-[#CDEA68] rounded-3xl font-[NeueMontriyan]">
      <div className="About_Ochi_Text h-[15%] min-[800px]:h-[30%] w-full py-20 px-10 ">
        <p className="text-[4.3vw] text-[#212121] font-normal leading-[3.7vw]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u> ,{' '}
          <u>explain com</u>­plex ideas, and <u>hire great peo­ple</u>
        </p>
      </div>

      <div className="Expect-Sec h-[45%] min-[995px]:h-[35%] w-full py-5 min-[700px]:px-10 border-2 border-t-[#B3CC5D] border-l-0 border-r-0 border-b-[#B3CC5D] flex flex-col min-[995px]:flex-row">
        <div className="Expect-Sec_part1 w-full min-[995px]:w-[40%] h-fit px-5 mb-[2.8vh] min-[1000px]:mb-0">
          What you can expect:
        </div>

        <div className="Expect-Sec-Part2 w-[21rem] min-[995px]:w-[28%]  h-full flex flex-col  items-start px-5">
          <p>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </p>

          <p className="mt-[7vh]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div className="Expect-Sec-Part2 w-[21rem] min-[995px]:w-[25%]  justify-center h-full flex flex-col   px-[7vw] ">
          <p> S:</p>

          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Behance</p>
        </div>
      </div>

      <div className="Approch_Sec w-full h-[40%] min-[995px]:h-[35%] flex flex-col min-[761px]:flex-row">
        <div className="Approch_Sec_Part1  h-full w-[40%]">
          <h1 className="text-[3.8vw] text-black font-normal leading-[3.7vw] px-10 pt-10">
            Our Approach
          </h1>
          <button className="bg-black w-full flex text-white px-5 py-[3vh] rounded-full mt-5 ml-10">
            <h4 className="text-[1rem]">Read Me</h4>
            <div className="circle bg-white h-[4%] w-[4%] ml-[3vw] rounded-full"></div>
          </button>
        </div>

        <div className="Approch_Sec_Part2 w-full min-[761px]:w-[60%] h-full py-[5vh] px-[3vw] flex flex-col justify-end items-start">
          <img
            src="./src/assets/Homepage-Photo-1326x939.jpg"
            alt=""
            srcset=""
            className="h-full w-[98%] min-[761px]:w-[87%] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
