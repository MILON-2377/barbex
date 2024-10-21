import React from "react";
import { IoLocationOutline, IoPhoneLandscape } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterSlider from "./FooterSlider";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className=" w-full bg-slate-950  ">
      <FooterSlider />

      {/* content */}
      <div className=" w-full p-5  sm:w-[70%] lg:w-[90%] lg:mt-10 sm:mx-auto sm:p-10 flex flex-col lg:flex-row lg:gap-5 ">
        <div className=" lg:border-r border-yellow-500 border-opacity-20 lg:w-[35%] lg:mr-5 ">
          <div className=" flex items-center gap-5 ">
            <div className=" w-10 h-10 rounded-full bg-[#B48E40] "></div>
            <h1 className=" text-3xl font-extrabold mb-2 text-white ">
              Barbex
            </h1>
          </div>
          <p className=" text-gray-400 mt-5 ">
            Phasellus vitae purus ac urna consequat facilisis a vel leo.
            Maecenas hendrerit lacinia mollis. Fusce in leo
          </p>
        </div>
        <div className=" lg:border-r border-yellow-500 border-opacity-20 lg:w-[30%] lg:mr-5 ">
          <p className=" mt-5 text-xl text-gray-400 font-semibold ">
            Contact Us
          </p>
          <p className=" mt-5 flex items-center gap-5 ">
            <IoLocationOutline className=" text-yellow-500 text-xl " />
            <span className=" text-xl text-gray-400 ">
              PV3M+X68 Welshpool United Kingdom
            </span>
          </p>
          <p className=" mt-2 flex items-center gap-5 ">
            <IoCall className=" text-yellow-500 text-xl " />
            <span className=" text-xl text-gray-400 ">
              PV3M+X68 Welshpool United Kingdom
            </span>
          </p>
          <p className=" mt-2 flex items-center gap-5 ">
            <MdEmail className=" text-yellow-500 text-xl " />
            <span className=" text-xl text-gray-400 ">
              PV3M+X68 Welshpool United Kingdom
            </span>
          </p>
        </div>

        <div>
          <p className=" mt-5 text-2xl font-semibold text-gray-400 font-arima ">
            Newsletter
          </p>

          <label className=" mt-5 flex items-center ">
            <input
              type="email"
              placeholder="Email address"
              className=" p-4 border-gray-200 sm:w-[80%] border-[2px] border-r-0 focus:outline-none focus:border-r-0 focus:border-yellow-500 "
            />
            <button className=" p-5 bg-yellow-500 text-white text-xl ">
              <IoIosSend />
            </button>
          </label>

          {/* social links and logos */}
          <div className=" mt-5 flex items-center gap-5 ">
            <button className="  text-xl text-gray-200 w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center ">
              <FaFacebook />
            </button>
            <button className="  text-xl text-gray-200 w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center ">
              <FaTwitter />
            </button>
            <button className="  text-xl text-gray-200 w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center ">
              <FaLinkedin />
            </button>
            <button className="  text-xl text-gray-200 w-10 h-10 border rounded-full border-gray-400 flex items-center justify-center ">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>

      <div className=" h-24 w-full p-5 bg-gray-800 bg-opacity-40 mt-32 flex items-center justify-center ">
        <p className=" text-xl text-white ">
          Copyright © 2022{" "}
          <span className=" hover:underline hover:cursor-pointer text-yellow-500 ">
            ThemeOri
          </span>{" "}
          Website by Barbex
        </p>
      </div>
    </div>
  );
}
