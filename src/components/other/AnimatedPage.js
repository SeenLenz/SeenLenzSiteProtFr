import { motion, variants, transition } from "framer-motion";
import { useState, useEffect, useContext, createContext } from "react";
import { leftContext } from "../../App";

export function AnimatedPage({ children }) {
  const [left, setleft] = useContext(leftContext);
  const asd = {
    beginning: { x: left ? window.innerWidth : -1 * window.innerWidth },
    middle: { x: 0 },
    end: { x: left ? -1 * window.innerWidth : window.innerWidth },
  };
  console.log(left);
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ x: left ? window.innerWidth : -1 * window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: left ? -1 * window.innerWidth : window.innerWidth }}
      transition={{ type: "ease" }}
      className="AnimNavbar-container"
    >
      {children}
    </motion.div>
  );
}
