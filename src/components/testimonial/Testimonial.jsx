"use client";
import React, { useRef, useState } from "react";
import img from "../../../public/images/female-stylist-posing-japanese-hairdressers.jpg";
import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonial() {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" relative bg-slate-800 w-full lg:h-[110vh] h-[80vh] mt-[40vh] ">
      {/* protfolio */}
      <Image
        src={img}
        alt="testimonial protfolio image"
        className=" object-cover absolute w-[90%] lg:left-[9%] lg:h-[70vh] lg:w-[81vw] left-5 sm:left-[12.5%] sm:-top-[27.4%] -top-[30%] sm:w-[75%] h-[40%] "
      />

      <div className=" relative sm:right-[8vw] right-[5.5vw] top-[2vh] sm:top-[2.5vh] lg:top-[32.2vh] lg:right-10 ">
        <button
          className="absolute w-14 h-14 lg:left-[85%]  right-16 sm:right-28 active:bg-yellow-400 top-[46%] transition-all duration-300 hover:bg-yellow-500 bg-white hover:text-white border-opacity-40 text-yellow-500 text-xl z-10 flex items-center justify-center"
          onClick={() => paginate(-1)}
        >
          <IoIosArrowBack />
          <IoIosArrowBack className="-ml-2" />
        </button>
        <button
          className="absolute w-14 h-14 lg:left-[90%] right-0  sm:right-8 active:bg-yellow-400 top-[46%] transition-all duration-300 hover:bg-yellow-500 bg-white hover:text-white border-opacity-40 text-yellow-500 text-xl z-10 flex items-center justify-center"
          onClick={() => paginate(1)}
        >
          <IoIosArrowForward />
          <IoIosArrowForward className="-ml-2" />
        </button>
      </div>

      <TestimonialSlider
        page={page}
        direction={direction}
        paginate={paginate}
      />
    </div>
  );
}
