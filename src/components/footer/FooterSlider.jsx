"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import brandImg1 from "../../../public/images/brand1.jpg";
import brandImg2 from "../../../public/images/brand2.png";
import brandImg3 from "../../../public/images/brand3.jpg";
import brandImg4 from "../../../public/images/brand4.jpg";
import Image from "next/image";

const brandImages = [
  {
    title: "Brand Image 1",
    image: brandImg1,
  },
  {
    title: "Brand Image 2",
    image: brandImg2,
  },
  {
    title: "Brand Image 3",
    image: brandImg3,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
  {
    title: "Brand Image 4",
    image: brandImg4,
  },
];

export default function FooterSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      className=" bg-gray-900 border-b border-yellow-600 border-opacity-25 bg-opacity-40 w-full h-[30vh] slider-container
     
    "
    >
      <div className=" sm:w-[80%] sm:mx-auto relative top-20 -right-8 sm:-right-16 ">
        <Slider {...settings}>
          {brandImages.map((i, idx) => (
            <div key={i.title + idx}>
              <Image
                src={i.image}
                alt={i.title}
                className=" w-16 h-16 rounded-full object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
