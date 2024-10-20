import React from "react";
import Button from "../buttons/Button";
import calederImg from "../../../public/images/1689.jpg";
import Image from "next/image";

const workTimes = [
  {
    day: "Mon day",
    time: "9: AM - 6: PM",
  },
  {
    day: "Thursday",
    time: "11: AM - 8: PM",
  },
  {
    day: "Wednesday",
    time: "6: AM - 4: PM",
  },
];

export default function WorkingTime() {
  return (
    <div className=" -mt-[15vh] font-arima w-full flex lg:flex-row flex-col gap-6 bg-black px-5 sm:px-24 h-[170vh] lg:h-[155vh] sm:h-[220vh] ">
      {/* content section */}
      <div className=" relative top-[40vh] lg:px-10 ">
        <div className=" relative ">
          <p className=" relative z-10 text-xl sm:text-2xl font-[800] text-[#B48E40] ">
            Working Our
          </p>
          <p className=" absolute text-white -top-5 sm:-top-10 text-[50px] sm:text-[90px] lg:text-[100px] opacity-10 ">
            WORKING
          </p>
        </div>
        <p className=" mt-8 lg:w-[70%] text-white text-3xl sm:text-5xl font-[600] leading-[40px] sm:leading-[60px] ">
          Working Hours
        </p>

        <p className=" mt-10 text-xl text-white ">
          Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas
          hendrerit lacinia mollis. Fusce in leo lectus. Phasellus leo mi,
          pellentesque nec risus malesuada, volutpat porta ligula. Nunc semper,
        </p>

        <div className=" flex flex-col gap-5 mt-10 ">
          {workTimes.map((i, ix) => (
            <>
              <p
                key={i + ix}
                className=" flex items-center justify-between text-2xl text-white "
              >
                <span>{i.day}</span>
                <span>{i.time}</span>
              </p>
              <p
                key={i + ix + "times"}
                className=" w-full border-b border-dashed border-yellow-600 border-opacity-50 "
              ></p>
            </>
          ))}

          {/* btn */}
          <Button
            name="BOOKING APPOINTMENT"
            icon=">>"
            color={"bg-white"}
            className={
              "p-4 flex items-center lg:w-[25vw] font-sans font-semibold hover:text-yellow-600 gap-4 justify-center text-sm sm:text-xl bg-[#B48E40] text-white mt-10 w-[70vw] lg:ml-0 sm:w-[45vw] "
            }
          />
        </div>
      </div>
      <Image
        src={calederImg}
        alt="caleder image"
        className=" object-cover lg:w-[50%] lg:px-12 lg:h-[60%] mt-[40vh] w-full mx-auto "
      />
    </div>
  );
}
