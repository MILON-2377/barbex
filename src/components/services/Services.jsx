import React from "react";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import Image from "next/image";
import img2 from "../../../public/images/download.jpg";

export default function Services() {
  return (
    <div className=" w-full bg-gray-100 lg:flex lg:gap-6 p-5 sm:p-0 ">
      {/* services image */}
      <div className=" sm:py-32 lg:flex-1 ">
        <Image
          src={img1}
          alt="services image"
          className=" sm:w-[550px] sm:mx-auto lg:mr-0  lg:w-[600px] sm:h-[600px] lg:h-[850px] object-cover"
        />
      </div>

      {/* content section */}
      <div className=" lg:w-[50%] lg:px-0 lg:mt-[30vh] font-arima sm:px-24 flex flex-col gap-5 ">
        <div className=" relative ">
          <p className=" relative z-10 text-xl sm:text-2xl font-[800] text-[#B48E40] ">
            Our Services
          </p>
          <p className=" absolute -top-10 text-[90px] lg:text-[120px] opacity-5 ">SERVICES</p>
        </div>
        <p className=" lg:w-[70%] text-3xl sm:text-5xl font-[600] leading-[40px] sm:leading-[60px] ">
          Popular Hair Cutting and salon
        </p>

        {/* cards */}
        <div className=" lg:w-[80%] flex flex-col sm:flex-row gap-6 mt-10 ">
          <div className=" flex flex-col gap-5 ">
            <div className=" flex flex-col gap-5 p-10 bg-white transition-all hover:border hover:border-yellow-400 duration-300 ">
              <Image
                src={img2}
                alt=" trend haircut img "
                className=" object-cover w-20 "
              />
              <p className=" transition-all duration-300 hover:text-yellow-500 text-[24px] font-[900] text-[#0F1212] ">
                Trend Haircut
              </p>
              <p className=" text-[16px] font-normal text-[#333334] ">
                Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                purus ex luctus nisi,
              </p>
            </div>
            <div className=" flex flex-col gap-5 p-10 bg-white transition-all hover:border hover:border-yellow-400 duration-300 ">
              <Image
                src={img2}
                alt=" trend haircut img "
                className=" object-cover w-20 "
              />
              <p className=" text-[24px] transition-all duration-300 hover:text-yellow-500 font-[900] text-[#0F1212] ">
                Hair Coloring
              </p>
              <p className=" text-[16px] font-normal text-[#333334] ">
                Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                purus ex luctus nisi,
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-5 sm:mt-10 ">
            <div className=" flex flex-col gap-5 p-10 bg-white transition-all hover:border hover:border-yellow-400 duration-300 ">
              <Image
                src={img2}
                alt=" trend haircut img "
                className=" object-cover w-20 "
              />
              <p className=" text-[24px] transition-all duration-300 hover:text-yellow-500 font-[900] text-[#0F1212] ">
                Hair Washing
              </p>
              <p className=" text-[16px] font-normal text-[#333334] ">
                Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                purus ex luctus nisi,
              </p>
            </div>
            <div className=" flex flex-col gap-5 p-10 bg-white transition-all hover:border hover:border-yellow-400 duration-300 ">
              <Image
                src={img2}
                alt=" trend haircut img "
                className=" object-cover w-20 "
              />
              <p className=" text-[24px] transition-all duration-300 hover:text-yellow-500 font-[900] text-[#0F1212] ">
                Facial hair Trim
              </p>
              <p className=" text-[16px] font-normal text-[#333334] ">
                Fusce id lorem risus. Duis mattis, nulla et placerat pretium,
                purus ex luctus nisi,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
