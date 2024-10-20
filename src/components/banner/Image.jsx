import React from "react";
import Image from "next/image";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img2 from "../../../public/images/medium-shot-man-getting-haircut.jpg";

export default function Images() {
  return (
    <div className=" relative z-10 w-[42vw] h-full ">
      <Image src={img1} alt="barbar image1"
      className=" relative top-16 sm:top-[20vh] object-cover w-[35vw] lg:w-[18vw] h-[25vh] sm:h-[50vh] "
      />
      <Image src={img2} alt="barbar image1"
      className=" relative left-[45vw] lg:left-[23vw] bottom-[5vh] sm:bottom-[15vh] object-cover w-[35vw] h-[25vh] lg:w-[18vw] sm:h-[50vh]  "
      />
    </div>
  );
}
