import { motion, variants } from "framer-motion";
import { useState, useEffect, useContext, createContext } from "react";

export const leftContext = createContext();

export function AnimatedPage({ children }) {
  const [left, setleft] = useState(true);
  const asd = {
    beginning: { x: left ? -1 * window.innerWidth : window.innerWidth },
    middle: { x: 0 },
    end: { x: left ? window.innerWidth : -1 * window.innerWidth },
  };

  return (
    <leftContext.Provider value={[left, setleft]}>
      <motion.div
        style={{ position: "absolute" }}
        variants={asd}
        initial="beginning"
        animate="middle"
        exit="end"
        className="AnimNavbar-container"
      >
        {children}
      </motion.div>
    </leftContext.Provider>
  );
}
