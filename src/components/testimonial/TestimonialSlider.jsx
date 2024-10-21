"use client";
import Image from "next/image";
import img from "../../../public/images/female-stylist-posing-japanese-hairdressers.jpg";
import img1 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img2 from "../../../public/images/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-scissors-comb-isolated-white-background-with-copy-space.jpg";
import img3 from "../../../public/images/woman-holding-makeup-brushes-studio.jpg";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, wrap, motion } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: "0%",
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 50, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 50, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const testimonialImages = [
  {
    name: "Cansu Tuman",
    title: "Good Services",
    text: "At Barbex, we take pride in offering top-notch barber services that cater to your unique style and needs.",
    img: img3,
  },
  {
    name: "John Doe",
    title: "Exceptional Experience",
    text: "The team at Barbex truly knows how to treat their clients. Highly recommend!",
    img: img1,
  },
  {
    name: "Emily Smith",
    title: "Best Haircut in Town",
    text: "I’ve tried several barbershops, but none compare to Barbex.",
    img: img2,
  },
  {
    name: "Mike Johnson",
    title: "Relaxing Atmosphere",
    text: "Barbex offers a chill vibe that makes my visits enjoyable.",
    img: img,
  },
];

export default function TestimonialSlider({ paginate, direction, page }) {
  const commentsIndex = wrap(0, testimonialImages.length, page);

  return (
    <div className="relative top-[15vh] lg:top-[60vh] sm:top-[30vh] w-full px-5 sm:w-[80%] sm:px-0 sm:mx-auto ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="w-full absolute flex flex-col sm:flex-row gap-6 lg:gap-0 "
        >
          <div className=" sm:mx-auto w-[55vw] lg:h-[30vh] lg:ml-0 lg:w-[15vw] sm:w-[25vw] h-[25vh] border  rounded-full overflow-hidden">
            <Image
              src={testimonialImages[commentsIndex].img}
              alt={testimonialImages[commentsIndex].name}
              className=" object-cover w-full h-full  rounded-full "
            />
          </div>
          <div className=" lg:w-[78%] w-full sm:w-[68%]">
            <p className=" text-white text-3xl font-arima font-bold ">
              {testimonialImages[commentsIndex].title}
            </p>
            <p className=" mt-2 text-yellow-600 flex items-center text-opacity-65 ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className=" text-xl mt-2 w-[90%] sm:w-auto text-white  ">
              {testimonialImages[commentsIndex].text}
            </p>
            <p className=" mt-5 text-xl text-white font-bold ">
              {testimonialImages[commentsIndex].name}
            </p>
            <p className=" mt-2 text-sm text-yellow-700 text-opacity-65 font-semibold ">
              Customer
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
