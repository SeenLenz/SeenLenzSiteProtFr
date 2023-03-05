import {
  useEffect,
  useContext,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { loginContext, mobileContext } from "../App";
import signature from "../img/signature.png";
import { NavLink } from "react-router-dom";
import { motion, Variants, spring, delay } from "framer-motion";

export function NavbarFinal() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [blobState, setblobState] = useState("home");
  const [currentNav, setcurrentNav] = useState("home");
  const [blob_width, setBlob_Width] = useState(25);
  const [blob_left, setBlob_Left] = useState(0);
  const [subpage_height, setSubpage_Height] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [dropdownHeightState, setdropdownHeightState] = useState(38);
  const [optionBottom, setoptionBottom] = useState(0);
  const [titleBottom, settitleBottom] = useState(0);

  const navigationtree = {
    Portfolio: {
      to: "/portfolio",
      img: "path/to/image",
      element: "",
      pages: {},
    },
    Fspect: {},
    SCLenz: {},
    RstyJingle: {},
    MusicPlayer: {},
  };

  const activeStyle = { color: "white" };
  let dropdownHeight = { height: dropdownHeightState };

  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      let target = document.querySelector(`.${currentNav}`);
      console.log(target);
      let blob = document.querySelector(`.blob`);
      setBlob_Left(
        Number(target.getBoundingClientRect().left) -
          document.querySelector(".f-navbar-desktop").getBoundingClientRect()
            .left
      );
    });
  }, [currentNav]);

  useLayoutEffect((e) => {
    let target = document.querySelector(`.home`);
    setBlob_Left(
      Number(target.getBoundingClientRect().left) -
        document.querySelector(".f-navbar-desktop").getBoundingClientRect().left
    );
    setBlob_Width(target.offsetWidth + 2);
    setOpacity(1);
  }, []);

  function EventSetBlob(e) {
    setcurrentNav(`${e.target.classList[0]}`);
    let navbar = document
      .querySelector(".f-navbar-desktop")
      .getBoundingClientRect();
    setBlob_Left(
      Number(e.currentTarget.getBoundingClientRect().left) - navbar.left
    );
    setBlob_Width(e.currentTarget.offsetWidth + 2);
  }

  function SubpageOptionSwitch(e) {
    setoptionBottom(38);
    settitleBottom(38);
  }

  return (
    <>
      {isMobile ? (
        <header>
          <div className="navbar-mobile ">
            <motion.div className="navbar-animation-wrapper"></motion.div>
            <ul className="navbar-content"></ul>
          </div>
        </header>
      ) : (
        <header>
          <div className="f-navbar-desktop">
            <motion.div className="navbar-animation-wrapper">
              <motion.div
                animate={{ left: blob_left, width: blob_width }}
                className="blob"
              ></motion.div>
            </motion.div>
            <motion.div
              className="subpage-collisionbox"
              style={dropdownHeight}
              animate={{ height: dropdownHeight }}
              onMouseLeave={(e) => {
                setSubpage_Height(0);
                setdropdownHeightState(38);
              }}
              onMouseEnter={(e) => {
                setSubpage_Height(194.5);
                setdropdownHeightState(249.5);
              }}
            >
              <div className="subpage-navigation-container">
                <motion.div
                  className="subpage-navigation"
                  transition={{ delay: 0.15, type: "spring" }}
                  animate={{ bottom: titleBottom }}
                >
                  <div className="subpage-navigation-icon"></div>
                  <div className="subpage-navigation-title">
                    <div></div>MusicPlayer
                  </div>
                </motion.div>
              </div>
              <motion.div
                animate={{ height: subpage_height }}
                className="subpage-navigation-dropdown"
              >
                <div className="subpage-navigation-option-container">
                  <motion.div
                    className="subpage-navigation-option"
                    onClick={(e) => {
                      SubpageOptionSwitch(e);
                    }}
                    animate={{ bottom: optionBottom }}
                    transition={{ delay: 0.08 }}
                  >
                    <div className="subpage-navigation-option-icon"></div>
                    <div className="subpage-navigation-option-title">
                      Fspect
                    </div>
                  </motion.div>
                </div>
                <div className="subpage-navigation-option-container">
                  <div className="subpage-navigation-option">
                    <div className="subpage-navigation-option-icon"></div>
                    <div className="subpage-navigation-option-title">
                      RstyJingle
                    </div>
                  </div>
                </div>
                <div className="subpage-navigation-option-container">
                  <div className="subpage-navigation-option">
                    <div className="subpage-navigation-option-icon"></div>
                    <div className="subpage-navigation-option-title">
                      Portfolio
                    </div>
                  </div>
                </div>
                <div className="subpage-navigation-option-container">
                  <div className="subpage-navigation-option">
                    <div className="subpage-navigation-option-icon"></div>
                    <div className="subpage-navigation-option-title">
                      SCLenz
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <ul className="navbar-content">
              <li className="subpage-placeholder"></li>
              <li className="page-navigation">
                <NavLink
                  to="/"
                  className="home NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/features"
                  className="features NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Features
                </NavLink>
                <NavLink
                  to="/download"
                  className="download NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Download
                </NavLink>
                <NavLink
                  to="/api"
                  className="api NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Api
                </NavLink>
              </li>
              {loggedIn ? (
                <li className="account-action">
                  <div className="account-picture"></div>
                </li>
              ) : (
                <li className="account-action">
                  <div className="login-picture"></div>
                </li>
              )}
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
