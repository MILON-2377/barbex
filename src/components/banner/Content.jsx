import React from "react";
import Button from "../buttons/Button";

export default function Content() {
  return (
    <div className=" w-full lg:w-[45vw] ml-20 ">
      <p className=" text-xl text-[#B48E40] ">Wlcome to Our Barbex</p>
      <p className=" text-7xl mt-8 text-[#0F1212] leading-[100px] font-extrabold ">
        We offer hair loss Solutions
      </p>

      <p className=" mt-10 text-xl font-[400] text-[#333334] mb-10 ">
        Our hair loss solutions include all of the necessary products to combat
        the ever-increasing problem of hair loss
      </p>

      <Button
        name="Booking Appointment"
        icon=">>"
        className={"flex items-center gap-2 p-4 bg-[#B48E40] uppercase text-[16px] text-white font-semibold "}
        color={"bg-gray-900"}
      />
    </div>
  );
}
