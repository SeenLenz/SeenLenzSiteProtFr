import { useContext, useState, useRef, useLayoutEffect } from "react";
import { loginContext, mobileContext } from "../../App";
import signature from "../../img/signature.png";
import { NavLink } from "react-router-dom";
import { motion, Variants, spring } from "framer-motion";

export function Trial() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const boxRef = useRef();
  const [blobState, setblobState] = useState("AboutMe");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  function EventSetBot(e, offsetx = 0, offsety = 0, height = 38) {
    setLeft(Number(e.currentTarget.getBoundingClientRect().left));
    setTop(
      Number(e.currentTarget.getBoundingClientRect().top) -
        e.currentTarget.offsetHeight / 6
    );
    setWidth(e.currentTarget.offsetWidth);
    setHeight(height);
  }

  return (
    <>
      <div className="trial">
        <motion.div
          className="box"
          animate={{ left, top, width, height }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        ></motion.div>
        <div className="row2">
          <button
            onClick={(e) => {
              EventSetBot(e, -5, -4);
            }}
          >
            Left
          </button>
          <button
            onClick={(e) => {
              EventSetBot(e, -2, -2);
            }}
          >
            Center
          </button>
          <button
            onClick={(e) => {
              EventSetBot(e, -2, -2);
            }}
          >
            Right
          </button>
        </div>
      </div>
    </>
  );
}
