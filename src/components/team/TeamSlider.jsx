"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import img1 from "../../../public/images/female-stylist-posing-japanese-hairdressers.jpg";
import img2 from "../../../public/images/girl-chair-professional-hairdresser.jpg";
import img3 from "../../../public/images/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-scissors-comb-isolated-white-background-with-copy-space.jpg";
import img4 from "../../../public/images/medium-shot-man-getting-haircut.jpg";
import img5 from "../../../public/images/smiling-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-scissors-comb-isolated-white-background-with-copy-space.jpg";

const teamImages = [
  { title: "Barber 1", name: "John Doe", img: img1 },
  { title: "Barber 2", name: "Jane Smith", img: img2 },
  { title: "Barber 3", name: "Sam Johnson", img: img3 },
  { title: "Barber 4", name: "Alice Brown", img: img4 },
  { title: "Barber 5", name: "Mike Davis", img: img5 },
];

export default function TeamSlider({ refCon }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full sm:w-[80%] p-5 border overflow-hidden lg:w-[85%] mx-auto">
      {/* Slider Images */}
      <Slider ref={refCon} {...settings}>
        {teamImages.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-[36vh] sm:h-[50vh] object-cover"
            />
            {/* Background Overlay */}
            <motion.div
              className={`absolute inset-0 bg-black z-0 ${
                hoveredIndex === idx ? "block" : "hidden"
              }`}
              initial={{ y: "-200%", opacity: 0 }}
              animate={
                hoveredIndex === idx
                  ? { y: 0, opacity: 0.5 }
                  : { y: "-200%", opacity: 0 }
              }
              transition={{ duration: 0.7 }}
            />
            {/* Content that appears on hover */}
            <motion.div
              className={`absolute bottom-0 left-0 right-0 z-10 p-4 bg-white text-slate-700`}
              initial={{ y: "100%", opacity: 0 }}
              animate={
                hoveredIndex === idx
                  ? { y: 0, opacity: 1 }
                  : { y: 0, opacity: 1 }
              }
              transition={{ duration: 1 }}
            >
              <h2 className="text-lg font-bold text-center">{item.name}</h2>
              <p className="text-center text-slate-700">Barber</p>

              {/* Extra content that appears on hover */}
              <motion.div
                className={`text-center ${
                  hoveredIndex === idx ? "block" : "hidden"
                }`}
                initial={{ opacity: 0, translateY: 10 }}
                animate={
                  hoveredIndex === idx
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 0, translateY: 10 }
                }
                transition={{ duration: 1 }}
              >
                <p>Additional content goes here.</p>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
