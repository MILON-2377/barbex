import React from "react";
import img from "../../../public/images/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-scissors-comb-isolated-white-background-with-copy-space.jpg";
import img1 from "../../../public/images/female-stylist-posing-japanese-hairdressers.jpg";
import img2 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img3 from "../../../public/images/woman-holding-makeup-brushes-studio.jpg";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const blogs = [
  {
    title: "Trendy Hairstyles for 2024",
    text: "Discover the latest trends in hairstyles that will elevate your look this year. From classic cuts to modern styles, we have something for everyone.",
    img: img1,
    date: "2024-10-05",
  },
  {
    title: "The Importance of Regular Haircuts",
    text: "Regular haircuts not only keep your style fresh but also promote healthy hair growth. Learn why scheduling your next appointment is crucial.",
    img: img2,
    date: "2024-10-10",
  },
];

export default function Blog() {
  return (
    <div className=" bg-white sm:p-10 mt-20 ">
      <div className=" flex items-center justify-center flex-col mb-10 ">
        <div className=" relative text-center ">
          <p className=" relative z-10 text-xl sm:text-2xl font-[800] text-[#B48E40] ">
            Blog And Article
          </p>
          <p className=" absolute  -top-5 sm:-top-10 text-[50px] sm:text-[90px] lg:text-[120px] opacity-5 ">
            Our News
          </p>
        </div>
        <p className=" lg:w-[70%] sm:text-center text-3xl sm:text-5xl font-[600] leading-[40px] sm:leading-[60px] ">
          Read Our BLog and News
        </p>
      </div>

      {/* content */}
      <div className=" flex flex-col lg:flex-row gap-5 sm:p-10 p-5 ">
        <div
          className={` flex lg:w-[25vw] border flex-col sm:w-[80%] sm:mx-auto `}
        >
          <Image
            src={img}
            alt={"title"}
            className=" lg:w-[25vw] w-full h-[40vh] object-cover "
          />

          {/* content */}
          <div className=" flex-1 flex flex-col gap-5 p-5 ">
            <div className=" flex items-center gap-10 ">
              <button className=" px-4 py-2 bg-yellow-500 text-white text-sm font-semibold ">
                Haircutting
              </button>
              <p className=" flex items-center gap-2 ">
                <FaCalendarAlt className=" text-yellow-500 text-sm " />
                <span className=" text-sm font-bold text-slate-800 ">
                  {new Date("2024-10-01").toDateString()}
                </span>
              </p>
            </div>
            <p className=" font-semibold font-arima text-slate-700 sm:text-2xl ">
              We are a Haircut Salon Based in South Melbourne
            </p>
            <p className=" text-xl font-sans font-normal text-slate-700 ">
              Discover the latest trends in hairstyles that will elevate your
              look this year. From classic cuts to modern styles, we have
              something for everyone.
            </p>
            <button className=" flex items-center gap-2 hover:underline ">
              <span className=" text-[16px] font-semibold text-slate-700 ">
                READ MORE{" "}
              </span>
              <span className=" flex items-center ">
                <IoIosArrowForward />
                <IoIosArrowForward className="-ml-2" />
              </span>
            </button>
          </div>
        </div>

        <div className=" lg:w-[70vw] sm:w-[80%] sm:mx-auto flex flex-col gap-5 ">
          {blogs.map((i, idx) => (
            <div
              key={i + idx}
              className={`flex lg:flex-row flex-col border sm:w-full lg:w-full `}
            >
              <Image
                src={i.img}
                alt={i.title}
                className=" w-full lg:w-[25vw] h-[40vh] lg:h-auto object-cover "
              />

              {/* content */}
              <div className=" flex-1 p-8 flex flex-col gap-5 ">
                <div className=" flex items-center gap-10 ">
                  <button className=" px-4 py-2 bg-yellow-500 text-white text-sm font-semibold ">
                    Haircutting
                  </button>
                  <p className=" flex items-center gap-2 ">
                    <FaCalendarAlt className=" text-yellow-500 text-sm " />
                    <span className=" text-sm font-bold text-slate-800 ">
                      {new Date(i.date).toDateString()}
                    </span>
                  </p>
                </div>
                <p className=" font-semibold font-arima text-slate-700 sm:text-2xl ">
                  We are a Haircut Salon Based in South Melbourne
                </p>
                <p className=" text-xl font-sans font-normal text-slate-700 ">
                  {i.text}
                </p>
                <button className=" flex items-center gap-2 hover:underline ">
                  <span className=" text-[16px] font-semibold text-slate-700 ">
                    READ MORE{" "}
                  </span>
                  <span className=" flex items-center ">
                    <IoIosArrowForward />
                    <IoIosArrowForward className="-ml-2" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
