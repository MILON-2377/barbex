"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavbarMenus from "@/constants/navbar";
import { FaPlus } from "react-icons/fa6";
import { MdAdd, MdMinimize } from "react-icons/md";

export default function LgNavItem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" hidden lg:flex items-center gap-8">
      {NavbarMenus.map((i, idx) => (
        <div key={idx} className="relative">
          <div
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer text-xl font-semibold flex items-center gap-2"
          >
            <span>{i?.title}</span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: hoveredIndex === idx ? 0 : -90 }} // Rotate to 90 degrees if not hovered
              transition={{ duration: 0.5 }}
              className="text-green-500"
            >
              {hoveredIndex === idx ? (
                <MdMinimize />
              ) : (
                <MdAdd /> 
              )}
            </motion.div>
          </div>

          {i.children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                hoveredIndex === idx
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -10 }
              }
              transition={{ duration: 0.3 }}
              className=" w-[200px] absolute left-0 border z-50 border-t-0 top-[8vh] mt-2 bg-white shadow-xl  p-5 "
            >
              {i.children.map((child, childIdx) => (
                <div key={childIdx} className="mb-2">
                  <p>{child.title}</p>
                  <p className="  w-full border-b mt-5 "></p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
