"use client";

import { motion } from "framer-motion";

export default function Button({ name, className, icon, color }) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.p
        className={`absolute inset-0 ${color} z-0`}
        
        variants={{
          initial: { scaleX: 0, borderRadius: "100%" },
          hover: { scaleX: 1, borderRadius: "0%" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      />
      <span className="relative z-10">{name}</span>
      <span className="relative z-10 text-2xl ">{icon}</span>
    </motion.button>
  );
}
