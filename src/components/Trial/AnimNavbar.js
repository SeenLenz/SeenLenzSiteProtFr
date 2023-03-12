import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { transform, Variants } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
import { AnimatedPage } from "../other/AnimatedPage";

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

  const normalDelay = [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1];
  const reverseDelay = normalDelay.reverse();

  const childanimation = {
    beginning: (index) => ({ y: 35 }),
    middle: (index) => ({
      y: 0,
      transition: { delay: reverseDelay[index] },
    }),
    end: (index) => ({
      y: -35,
      transition: { delay: normalDelay[index] },
    }),
  };

  const [current, setCurrent] = useState(navigationtree.Portfolio);
  const AnimatedNavLink = motion(NavLink);

  return (
    <AnimatedPage>
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
        <div className="navbar-wrapper">
          <AnimatePresence mode="wait">
            {current.pages.map(([name, to], index) => {
              return (
                <AnimatedNavLink
                  to={to}
                  key={to}
                  variants={childanimation}
                  custom={index}
                  initial="beginning"
                  animate="middle"
                  exit="end"
                >
                  {name}
                </AnimatedNavLink>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  );
}
