import React from 'react';


const About = () => {
  return (
    <div className="w-full h-[200vh] flex flex-col  bg-[#CDEA68] rounded-3xl font-[NeueMontriyan]">
      <div className="About_Ochi_Text h-[30%] w-full py-20 px-10 ">
        <p className='text-[4.3vw] text-[#212121] font-normal leading-[3.7vw]'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u> , <u>explain com</u>­plex ideas, and <u>hire great peo­ple</u>
        </p>
      </div>



      <div className="Expect-Sec h-[35%] w-full py-5 px-10 border-2 border-t-[#B3CC5D] border-l-0 border-r-0 border-b-[#B3CC5D] flex">
        <div className="Expect-Sec_part1 w-[40%] h-full">
          What you can expect:
        </div>

        <div className="Expect-Sec-Part2 w-[28%]  h-full flex flex-col  items-start px-5">

          <p>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>

          <p className='mt-[7vh]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>


        <div className="Expect-Sec-Part2 w-[25%]  justify-center h-full flex flex-col   px-[7vw] ">

          <p>  S:</p>


          <p>Instagram</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Behance</p>




        </div>
      </div>


      <div className="Approch_Sec w-full  h-[35%] flex">
        <div className="Approch_Sec_Part1  h-full w-[40%]">
           <h1 className='text-[3vw] text-black font-normal leading-[3.7vw] px-10 pt-10'>Our Approach</h1>
        </div>

           <div className="Approch_Sec_Part2 w-[60%] h-full py-[5vh] px-[3vw] flex flex-col justify-end items-start">
           <img src="./src/assets/Homepage-Photo-1326x939.jpg" alt="" srcset="" className='h-full w-[87%] rounded-2xl object-cover' />
        </div>
      </div>

    </div>
  );
}

export default About;