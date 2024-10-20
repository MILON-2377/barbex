import React from "react";
import Content from "./Content";
import Border from "./Border";
import Images from "./Image";

export default function Banner() {
  return (
    <div className=" relative font-arima flex lg:flex-row flex-col lg:items-center justify-between w-full p-5 sm:p-10 bg-gray-300 bg-opacity-30 h-auto lg:h-[100vh] overflow-hidden mb-20 ">
      <Content />
      <div className=" relative lg:w-auto sm:w-full lg:h-auto sm:h-[100vh] ">
        <Images />
        <Border />
      </div>
    </div>
  );
}
