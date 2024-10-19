"use client";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import NavbarMenus from "@/constants/navbar";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.01,
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export default function NavigationItem({ open }) {
  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      variants={variants}
      className=" w-[90%] sm:w-[80%] p-6 absolute top-[200px] left-5 sm:left-20 bg-gray-400"
    >
      {NavbarMenus.map((i, idx) => (
        <MenuItem i={i} key={idx} />
      ))}
    </motion.div>
  );
}
