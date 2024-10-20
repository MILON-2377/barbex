"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { contactInfo } from "@/constants/navbar";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import img from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import Image from "next/image";

export default function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div className=" relative z-50 drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        checked={isDrawerOpen}
        onChange={toggleDrawer}
        className="drawer-toggle"
      />
      <div className="drawer-content flex items-center justify-center  hover:cursor-pointer w-14 h-14 rounded-full bg-[#B48E40] bg-opacity-10">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className=" hover:cursor-pointer ">
          <IoMdMenu className=" text-4xl text-[#B48E40] text-opacity-80 " />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-[500px] p-4">
          <div className=" w-full flex items-center justify-between font-bold px-3 ">
            <div className=" flex items-center gap-2 ">
              <div className=" w-10 h-10 rounded-full bg-[#B48E40] "></div>
              <h1 className=" text-3xl font-extrabold mb-2 text-black ">
                Barbex
              </h1>
            </div>
            <motion.button
              onClick={toggleDrawer}
              whileHover={{ rotate: 180 }}
              transition={{
                duration: 0.5,
              }}
              className=" w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center border text-[18px] hover:cursor-pointer sm:text-xl "
            >
              <RxCross1 />
            </motion.button>
          </div>

          <div className=" mt-5 mb-5 border-t border-t-gray-200 w-full "></div>

          {/* main contents */}
          <div className=" p-5 ">
            <p className=" text-xl ">
              Haircut, is a term used to describe when a person removes the hair
              on their head. This is done to allow for better access to the part
              of the body that needs cutting.
            </p>

            {/* image */}
            <Image
              src={img}
              alt="hair cutting image"
              className=" object-cover mt-10 "
            />

            {/* contact info */}
            <div className=" mt-10 ">
              <h2 className=" text-2xl font-bold ">Contact Info</h2>
              <div className=" flex flex-col gap-7 mt-5 ">
                {contactInfo.map((item, idx) => (
                  <div key={idx + item} className=" flex items-center gap-8 ">
                    <p>
                      {item?.number && (
                        <FaPhoneAlt className=" text-4xl text-green-400 " />
                      )}
                      {item?.email && (
                        <MdEmail className=" text-4xl text-blue-400 " />
                      )}
                      {item?.address && (
                        <IoLocationSharp className=" text-5xl text-yellow-300 " />
                      )}
                    </p>
                    <p className=" flex flex-col gap-2 ">
                      <span className=" text-2xl  font-semibold ">
                        {item.title}
                      </span>
                      <span className=" text-xl hover:cursor-pointer hover:text-yellow-400 hover:text-opacity-70 ">
                        {item?.number || item.email || item?.address}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* social links */}
            <div className=" flex items-center mt-20 gap-5 ">
              <p className=" hover:cursor-pointer text-xl p-2 border hover:bg-yellow-100 transition-all duration-300 ">
                <FaTwitter />
              </p>
              <p className=" hover:bg-yellow-100 transition-all duration-300 hover:cursor-pointer text-xl p-2 border ">
                <FaLinkedin />
              </p>
              <p className=" hover:cursor-pointer text-xl p-2 border hover:bg-yellow-100 transition-all duration-300 ">
                <FaFacebook />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
