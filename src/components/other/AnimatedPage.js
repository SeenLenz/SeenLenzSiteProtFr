import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function AnimatedPage({ children }) {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("home");
  const [left, setLeft] = useState(false);

  useEffect(() => {
    const prevLocationId = Number(
      document.querySelector(`.${prevLocation}`).id
    );
    const newLocationId = Number(
      document.querySelector(`.${location.pathname.split("/").pop()}`).id
    );
    console.log(
      `prevLocationId: ${document.querySelector(
        `.${prevLocation}`
      )} ${prevLocationId}`
    );
    console.log(
      `newLocationId: ${document.querySelector(
        `.${location.pathname.split("/").pop()}`
      )} ${newLocationId}`
    );
    setLeft(prevLocationId >= newLocationId);
    setPrevLocation(location.pathname.split("/").pop());
    console.log(`set`);
  }, [location.pathname]);

  const variants = {
    beginning: (left) => {
      // console.log(`beginning: ${left}`);
      return {
        x: left ? window.innerWidth : -window.innerWidth,
      };
    },
    middle: () => {
      return { x: 0 };
    },
    end: (left) => {
      // console.log(`end: ${left}`);
      return {
        x: left ? -window.innerWidth : window.innerWidth,
      };
    },
  };

  return (
    <AnimatePresence mode="sync" custom={left}>
      <motion.div
        style={{ position: "absolute" }}
        variants={variants}
        custom={left}
        initial="beginning"
        animate="middle"
        exit="end"
        className="AnimNavbar-container"
        key={uuidv4()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
