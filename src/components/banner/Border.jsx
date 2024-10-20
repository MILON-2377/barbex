import React from "react";

export default function Border() {
  return (
    <div className=" lg:block hidden relative w-auto h-auto  ">
      <div className=" overflow-hidden absolute bottom-[32vh] -right-14  w-[450px] h-[450px] border rounded-full "></div>
      <div className=" absolute -top-[65vh] -right-14 w-[450px] h-[450px] border rounded-full "></div>
    </div>
  );
}
