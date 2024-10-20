import React from "react";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img2 from "../../../public/images/medium-shot-man-getting-haircut.jpg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../buttons/Button";

export default function AboutUs() {
  return (
    <div className="bg-white flex lg:flex-row flex-col p-5 sm:p-10 ">
      {/* iamges */}
      <div className=" lg:w-[50vw] w-full relative flex items-center justify-center  ">
        <Image
          src={img1}
          alt="barbar about us image"
          className=" border-[14px] border-b-0 border-r-0 object-cover w-[520px] h-[720px] rounded-full "
        />
        <Image
          src={img2}
          alt="barbar about us image"
          className=" absolute right-0 -bottom-5  object-cover w-[240px] h-[330px] rounded-full border-[8px] border-white "
        />
      </div>

      {/* content section */}
      <div className=" flex-1 lg:mt-32 font-arima sm:px-16 mt-20 flex flex-col gap-5 ">
        <div className=" relative ">
          <p className=" relative z-10 text-xl font-[800] text-[#B48E40] ">
            About Us
          </p>
          <p className=" absolute -top-10 text-[90px] opacity-5 ">ABOUT</p>
        </div>
        <p className=" text-3xl sm:text-5xl leading-[40px] sm:leading-[60px] ">
          Best Haircut Salons For Men Women
        </p>
        <p className=" mt-5 font-sans text-[16px] font-[500] text-[#333334] ">
          Haircut" is a term used to describe when a person removes the hair on
          their head. This is done to allow for better access to the part of the
          body that needs cutting.
        </p>
        <p className=" mt-5 text-[16px] lg:text-xl font-[500] text-[#333334] flex items-center gap-3">
          <FaCheckCircle className=" text-xl text-yellow-600 " />
          <span>We're professional and certified barbers</span>
        </p>
        <p className=" text-[16px] lg:text-xl font-[500] text-[#333334] flex items-center gap-3">
          <FaCheckCircle className=" text-xl text-yellow-600 " />
          <span>Easy to use salon special offer navigation</span>
        </p>
        <p className=" text-[16px] lg:text-xl font-[500] text-[#333334] flex items-center gap-3">
          <FaCheckCircle className=" text-xl text-yellow-600 " />
          <span>We care about our customers satisfaction</span>
        </p>

        <Button
          name="READ MORE"
          icon=">>"
          color={"bg-[#333334]"}
          className={
            "px-4 py-3 flex items-center gap-4 justify-center text-xl bg-[#B48E40] text-white mt-10 w-[70vw] lg:ml-0 lg:w-[15vw] sm:w-[30vw] "
          }
        />
      </div>
    </div>
  );
}
