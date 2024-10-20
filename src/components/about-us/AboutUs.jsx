import React from "react";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img2 from "../../../public/images/medium-shot-man-getting-haircut.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white p-10 ">
      {/* iamges */}
      <div>
        <Image
          src={img1}
          alt="barbar about us image"
          className=" object-cover w-[520px] h-[720px] rounded-full "
        />
        <Image
          src={img2}
          alt="barbar about us image"
          className=" object-cover w-[240px] h-[330px] rounded-full border-2 border-white "
        />
      </div>
    </div>
  );
}
