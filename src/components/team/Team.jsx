"use client";
import React, { useRef } from "react";
import TeamSlider from "./TeamSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Team() {
  const sliderRef = useRef(null);
  return (
    <div className=" bg-white p-5  ">
      {/* content */}
      <div className=" mt-[25vh] w-full sm:w-[80%] mb-10 mx-auto sm:px-5 font-arima ">
        <div className=" relative ">
          <p className=" relative z-10 text-xl sm:text-2xl font-[800] text-[#B48E40] ">
            Expert Team
          </p>
          <p className=" absolute text-slate-700 -top-5 sm:-top-10 text-[50px] sm:text-[90px] lg:text-[100px] opacity-10 ">
            TEAM
          </p>
        </div>
        <p className=" mt-8 w-full lg:w-[30vw] text-slate-800 text-3xl sm:text-4xl font-[600] leading-[40px] sm:leading-[60px] ">
          We've lots of Experience Members barbers
        </p>
      </div>

      <div className=" relative w-full mb-[18vh] lg:mb-14 lg:-top-20 sm:-top-5 sm:right-10 lg:right-5 ">
        <button
          className="absolute w-14 h-14 lg:left-[85%]  right-16 sm:right-28 active:bg-yellow-400 top-[46%] border-yellow-700 transition-all duration-300 hover:bg-yellow-500 hover:text-white border-opacity-40 text-yellow-500 text-xl z-10 border rounded-full flex items-center justify-center"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack />
          <IoIosArrowBack className="-ml-2" />
        </button>
        <button
          className="absolute w-14 h-14 lg:left-[90%] right-0  sm:right-8 active:bg-yellow-400 top-[46%] border-yellow-700 transition-all duration-300 hover:bg-yellow-500 hover:text-white border-opacity-40 text-yellow-500 text-xl z-10 border rounded-full flex items-center justify-center"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward />
          <IoIosArrowForward className="-ml-2" />
        </button>
      </div>

      {/* slider */}
      <TeamSlider refCon={sliderRef} />
    </div>
  );
}
