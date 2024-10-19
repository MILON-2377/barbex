"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function MenuItem({ i }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const style = { border: `2px solid ${colors[i.index % colors.length]}` };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      variants={variants}
      //   whileHover={{ scale: 1.03 }}
      // whileTap={{ scale: 0.98 }}
      className="list-none mb-5 flex flex-col hover:cursor-pointer"
    >
      <div
        onClick={toggleExpand}
        className="flex items-center justify-between rounded-[5px] w-full h-5"
        style={style}
      >
        <p className=" text-[16px] font-[500] ">{i.title}</p>

        {i.children && (
          <p className="ml-2 p-5 ">
            {isExpanded ? (
              <FaRegWindowMinimize />
            ) : (
              <>
                <FaPlus />
              </>
            )}
          </p>
        )}
      </div>
      {isExpanded && i.children && (
        <motion.div
          initial="closed"
          animate="open"
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          className="ml-4 mt-5 mb-0 list-none "
        >
          {i.children.map((child, idx) => (
            <MenuItem key={idx} i={child} />
          ))}
        </motion.div>
      )}

      <div
        className={` ${
          i.title === "Contact" && "border-none"
        } w-full border-b mt-5 bg-black `}
      ></div>
    </motion.div>
  );
}
