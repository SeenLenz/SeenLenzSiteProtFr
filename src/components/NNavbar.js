import { useContext, useState, useRef, useLayoutEffect } from "react";
import { loginContext, mobileContext } from "../App";
import signature from "../img/signature.png";
import { NavLink } from "react-router-dom";
import { motion, Variants, spring } from "framer-motion";

export function NNavbar() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [blobState, setblobState] = useState("home");
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(25);
  const [height, setHeight] = useState(25);

  function EventSetBlob(e, offsetx = 0, offsety = 0, height = 38) {
    setLeft(
      (Number(e.currentTarget.getBoundingClientRect().left) -
        e.currentTarget.offsetWidth / 6 )-
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().x + 9
    );
    setTop(
    (Number(e.currentTarget.getBoundingClientRect().top) -
        e.currentTarget.offsetHeight / 6)-
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().y 
    );
    setWidth(e.currentTarget.offsetWidth);
    setHeight(height);
  }

  return (
    <>
      {isMobile ? (
        <header>
          <div className="navbar-mobile">
            <motion.div className="navbar-animation-wrapper"></motion.div>
            <ul className="navbar-content"></ul>
          </div>
        </header>
      ) : (
        <header>
          <div className="nnavbar-desktop">
            <motion.div className="navbar-animation-wrapper">
              <motion.div
                animate={{ left, top, width, height }}
                className="blob"
              ></motion.div>
            </motion.div>
            <ul className="navbar-content">
              <li>
                <button
                  onClick={(e) => {
                    EventSetBlob(e);
                    console.log(
                      document
                        .querySelector(".nnavbar-desktop")
                        .getBoundingClientRect()
                    );
                  }}
                >
                  asdasd
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                >
                  asdasd
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                >
                  asdasd
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                >
                  asdasd
                </button>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}

{
  /* <li className="logo">
<NavLink
  to="/"
  className="navigation-route-img"
  onClick={(e) => {
    setblobState("home");
  }}
>
  {" "}
  <img src={signature} alt="React Logo" />
</NavLink>
</li>
<li className="navigation">
<ul>
  <li>
    <NavLink
      to="/Fspect"
      className="navigation-route"
      onClick={(e) => {
        setblobState("Fspect");
      }}
      style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }
    >
      Fspect
    </NavLink>
  </li>
  <li>
    {" "}
    <NavLink
      to="/AboutMe"
      className="navigation-route"
      onClick={(e) => {
        setblobState("AboutMe");
      }}
      style={({ isActive }) =>
        isActive ? activeStyle : undefined
      }
    >
      Aboute me
    </NavLink>
  </li>
</ul>
</li>
<li className="account-action">
<ul>
  {loggedIn ? (
    "Profile"
  ) : (
    <>
      <li className="signin-btn">Sign Up</li>
      <li className="login-btn">Login</li>
    </>
  )}
</ul>
</li> */
}
