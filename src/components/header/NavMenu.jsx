"use client";
import React from "react";
import MenuToggle from "./MenuToggle";
import NavigationItem from "./NavigationItem";
import { useCycle, motion } from "framer-motion";

export default function NavMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className=" "
    >
      <MenuToggle toggle={() => toggleOpen()} />

      <NavigationItem open={isOpen} />
    </motion.div>
  );
}
