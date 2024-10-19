import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdWifiCalling2 } from "react-icons/md";

export default function TopNav() {
  return (
    <div className=" h-auto py-2 lg:h-[60px] w-full bg-[#B48E40] flex lg:flex-row flex-col items-center justify-between gap-2 sm:gap-0 lg:px-32 ">
      <div className=" flex sm:flex-row flex-col items-center gap-1 sm:gap-6 ">
        <p className="  flex items-center gap-2 hover:cursor-pointer ">
          <CiLocationOn className=" text-xl text-white " />
          <span className="  text-white text-[16px] leading-6 font-bold ">
            Location :
          </span>
          <span className="  text-white text-[16px] ">GXH8+999 Reading, UK</span>
        </p>
        <span className=" text-white text-3xl hidden sm:block ">|</span>
        <p className="  flex items-center gap-2 hover:cursor-pointer ">
          <CiClock2 className=" lg:text-xl text-white " />
          <span className="  text-white text-[16px] leading-6 font-bold ">
            Opening :
          </span>
          <span className="  text-white lg:text-[16px] ">
            Sun - Fri 9: AM - 5: PM
          </span>
        </p>
      </div>

      {/* icons */}
      <div className=" flex items-center w-full justify-evenly sm:w-auto gap-2 sm:gap-6 ">
        <p className="  text-white flex items-center gap-6 ">
          <FaTwitter className=" hover:cursor-pointer " />
          <FaLinkedinIn className=" hover:cursor-pointer " />
          <FaInstagram className=" hover:cursor-pointer " />
        </p>
        <span className="  text-white text-3xl ">|</span>
        <p className="  flex items-center gap-2 hover:cursor-pointer ">
          <MdWifiCalling2 className=" text-white text-xl " />
          <span className=" text-white text-[16px] leading-6 font-bold ">
            Hotline +125 (895) 658
          </span>
        </p>
      </div>
    </div>
  );
}
