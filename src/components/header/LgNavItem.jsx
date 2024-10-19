"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavbarMenus from "@/constants/navbar";

export default function LgNavItem() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" hidden lg:flex items-center gap-8">
      {NavbarMenus.map((i, idx) => (
        <div key={idx} className="relative">
          <div>
            <p
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer text-xl font-semibold "
            >
              {i?.title}
            </p>
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
              className=" w-[200px] absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-5 "
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
