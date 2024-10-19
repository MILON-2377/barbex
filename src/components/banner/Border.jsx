import React from "react";

export default function Border() {
  return (
    <div className=" relative w-auto h-auto  ">
      <div className=" overflow-hidden absolute -top-[41vh] -right-[3vw] w-[450px] h-[450px] border rounded-full "></div>
      <div className=" absolute -top-[20vh] -right-[8vw] w-[450px] h-[450px] border rounded-full "></div>
    </div>
  );
}
