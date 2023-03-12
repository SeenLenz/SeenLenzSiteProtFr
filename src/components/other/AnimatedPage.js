import { motion, variants } from "framer-motion";
import { leftContext } from "../../App";
import { useState } from "react";

export function AnimatedPage({ children }) {
  const [left, setleft] = useState(leftContext);
  const asd = {
    beginning: () => ({ x: left ? -window.innerWidth : window.innerWidth }),
    middle: () => ({ x: 0 }),
    end: () => ({ x: left ? window.innerWidth : -window.innerWidth }),
  };

  return (
    <motion.div
      initial={{ x: left ? -window.innerWidth : window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: left ? window.innerWidth : -window.innerWidth }}
      className="AnimNavbar-container"
    >
      {children}
    </motion.div>
  );
}
