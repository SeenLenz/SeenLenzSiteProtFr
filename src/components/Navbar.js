import { useContext, useState, useRef, useLayoutEffect } from "react";
import { loginContext, mobileContext } from "../App";
import signature from "../img/signature.png";
import { NavLink } from "react-router-dom";
import { motion, Variants, spring } from "framer-motion";

export function Navbar() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [blobState, setblobState] = useState("home");

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const activeStyle = { color: "white" };

  return (
    <>
      {isMobile ? (
        <header>
          <div className="navbar-mobile">
            <motion.div className="navbar-animation-wrapper">
              {/* <motion.div
                className="navbar-active-highlight"
                data-blobstate={blobState}
                layout
                transition={spring}
              ></motion.div> */}
            </motion.div>
            <ul className="navbar-content">
              <li className="logo">
                <NavLink to="/" className="navigation-route-img">
                  {" "}
                  <img src={signature} alt="React Logo" />
                </NavLink>
              </li>
              <li className="navbar-hamburger">
                <div className="menu"></div>
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
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header>
          <div className="navbar-desktop">
            <motion.div className="navbar-animation-wrapper">
              <motion.div
                className="navbar-active-highlight"
                data-blobstate={blobState}
                layout
                transition={spring}
              ></motion.div>
            </motion.div>
            <ul className="navbar-content">
              <li className="logo">
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
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}
