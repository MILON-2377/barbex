import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img2 from "../../../public/images/medium-shot-man-getting-haircut.jpg";

export default function Images() {
  return (
    <div className=" relative z-10 -right-14 top-10 w-[42vw] h-full ">
      <Image src={img1} alt="barbar image1"
      className=" absolute top-[10vh] object-cover w-[18vw] h-[50vh] "
      />
      <Image src={img2} alt="barbar image1"
      className=" absolute right-14 bottom-[15vh] object-cover w-[18vw] h-[50vh]  "
      />
    </div>
  );
}
