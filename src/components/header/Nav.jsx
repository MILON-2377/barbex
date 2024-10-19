import React from "react";
import NavMenu from "./NavMenu";
import Drawer from "./Drawer";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Nav() {
  return (
    <div className=" h-28 flex items-center justify-between w-[95%] lg:w-full sm:w-[80%] mx-auto lg:px-16 ">
      {/* logo and name */}
      <div className=" flex items-center gap-2 ">
        <div className=" w-10 h-10 rounded-full bg-[#B48E40] "></div>
        <h1 className=" text-3xl font-extrabold mb-2 text-black ">Barbex</h1>
      </div>

      {/* dropdown navbar menu for medium and small devices */}
      <NavMenu />

      <div className=" flex items-center gap-6 ">
        <p className=" text-2xl text-gray-400 flex items-center gap-5 ">
          <CiSearch />

          <CiShoppingBasket className=" text-3xl " />
        </p>

        {/* drawer for large devices */}
        <Drawer />
      </div>
    </div>
  );
}
