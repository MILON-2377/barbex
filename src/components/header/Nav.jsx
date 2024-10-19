import React from "react";
import NavMenu from "./NavMenu";

export default function Nav() {
  return (
    <div className=" h-28 flex items-center justify-between w-[95%] sm:w-[80%] mx-auto ">
      {/* logo and name */}
      <div className=" flex items-center gap-2 ">
        <div className=" w-10 h-10 rounded-full bg-[#B48E40] "></div>
        <h1 className=" text-3xl font-extrabold mb-2 text-black ">Barbex</h1>
      </div>

      {/* navbar menu for small devices */}
      <NavMenu />
    </div>
  );
}
