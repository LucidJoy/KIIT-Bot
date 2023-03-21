import React from "react";
import Image from "next/image";
import { comma, kiit } from "@/assets";

const Hero = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-[2.5] pl-[100px]'>
        <Image
          src={comma}
          className='absolute w-[150px] h-[150px] top-[30px] left-[60px] select-none'
        />

        <div className='bg-white w-[350px] h-[350px] rounded-full absolute  -right-[30px] -top-[30px]'>
          <Image
            src={kiit}
            className='w-[250px] top-[90px] left-[45px] relative'
          />
        </div>

        <div className='flex flex-col h-full justify-center'>
          <p className='font-bold text-[40px] leading-[50px]'>
            Find the perfect
            <br /> solutions for any <br /> questions at{" "}
            <span className='text-[#00793C]'> KIIT </span>
            <br /> with
            <span className='text-[#00793C]'> KOT </span>
          </p>

          <p className='font-normal mt-[10px]'>
            We are presenting you one of the best dynamic <br /> answering
            machine learning bot for our KIIT University. <br /> You can find
            1000+ solutions to problems faced at KIIT.
          </p>

          <button
            type='button'
            class='focus:outline-none text-white bg-[#007D14] hover:bg-[#007112] transition-all ease-in-out duration-150 font-semibold rounded-lg text-md px-5 py-2.5 mr-2 w-[150px] mt-[15px] -mb-[30px]'
          >
            Ask KOT
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className='flex flex-row justify-between flex-1 bg-[#000000] py-[50px] px-[100px] text-white'>
        <div className='flex flex-col gap-[12px]'>
          <div className='flex flex-row font-normal text-sm gap-[24px]'>
            <button>Check out Now</button>
            <button>License</button>
          </div>

          <div className='flex flex-row font-normal text-sm gap-[24px]'>
            <button>About</button>
            <button>Pricing</button>
            <button>Features</button>
            <button>News</button>
            <button>Help</button>
            <button>Contact</button>
          </div>

          <div className='flex flex-row'>
            <p className='text-[#D1D5DB] text-xs mt-[10px]'>
              &copy; 2023 KOT All rights reserved
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start'>
          <p className='font-semibold text-[50px] mr-[200px] whitespace-nowrap text-white'>
            KOT
          </p>
          <span className='self-center font-normal text-[30px] mr-[200px] whitespace-nowrap text-white'>
            The KIIT Bot
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
