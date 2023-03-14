import { motion, variants } from "framer-motion";
import { useState, useEffect, useContext, createContext } from "react";

export const leftContext = createContext();

export function AnimatedPage({ children }) {
  const [left, setleft] = useState(true);
  const asd = {
    beginning: { x: left ? window.innerWidth : -1 * window.innerWidth },
    middle: { x: 0 },
    end: { x: left ? -1 * window.innerWidth : window.innerWidth },
  };
  console.log(left);
  return (
    <leftContext.Provider value={[left, setleft]}>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ x: left ? window.innerWidth : -1 * window.innerWidth }}
        animate={{ x: 0 }}
        exit={{ x: left ? window.innerWidth : -1 * window.innerWidth }}
        className="AnimNavbar-container"
      >
        {children}
      </motion.div>
    </leftContext.Provider>
  );
}
