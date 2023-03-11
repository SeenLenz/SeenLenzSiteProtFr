import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export function AnimNavbar() {
  const navigationtree = {
    Portfolio: {
      to: "/Portfolio",
      img: "../img/PPictures/Portfolio.svg",
      title: "Portfolio",
      active: false,
      pages: [
        ["Works", "/works"],
        ["About me", "/aboutme"],
        ["CV", "/cv"],
      ],
    },

    Fspect: {
      to: "/Fspect",
      img: "../img/PPictures/Fspect.svg",
      title: "Fspect",
      active: false,
      pages: [
        ["Home", "/Fspect/home"],
        ["Stats", "/Fspect/statistics"],
        ["Api", "/Fspect/api"],
      ],
    },
  };

  const containeranimation = {
    start: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: -0.1 } },
  };

  const childanimation = {
    beginning: { x: -1200 },
    middle: { x: 0 },
    end: { x: 1200 },
  };

  const [current, setCurrent] = useState(navigationtree.Portfolio);
  const AnimatedNavLink = motion(NavLink);

  return (
    <>
      <div className="AnimNavbar-container">
        <div className="buttons">
          <button
            onClick={(e) => {
              setCurrent(
                current.title === navigationtree.Fspect.title
                  ? navigationtree.Portfolio
                  : navigationtree.Fspect
              );
            }}
          >
            Change
          </button>
          <button>Remove</button>
          <button>Add</button>
        </div>
        <div className="navbar">
          <motion.div
            className="navbar-wrapper"
            variants={containeranimation}
            initial="start"
            exit="exit"
          >
            {current.pages.map(([name, to], index) => {
              return (
                <AnimatedNavLink
                  to={to}
                  key={to}
                  variants={childanimation}
                  initial="beginning"
                  animate="middle"
                  exit="end"
                >
                  {name}
                </AnimatedNavLink>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
