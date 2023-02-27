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
import { motion, Variants, spring } from "framer-motion";

export function NavbarFinal() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [blobState, setblobState] = useState("home");
  const [currentNav, setcurrentNav] = useState("home");
  const [width, setWidth] = useState(25);
  const [left, setLeft] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const activeStyle = { color: "white" };

  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      let target = document.querySelector(`.${currentNav}`);
      console.log(target);
      let blob = document.querySelector(`.blob`);
      setLeft(
        Number(target.getBoundingClientRect().left) -
          document.querySelector(".f-navbar-desktop").getBoundingClientRect()
            .left
      );
    });
  }, [currentNav]);

  useLayoutEffect((e) => {
    let target = document.querySelector(`.home`);
    setLeft(
      Number(target.getBoundingClientRect().left) -
        document.querySelector(".f-navbar-desktop").getBoundingClientRect().left

    );
    setWidth(target.offsetWidth + 2);
    setOpacity(1);
  }, []);

  function EventSetBlob(e) {
    setcurrentNav(`${e.target.classList[0]}`);
    let navbar = document
      .querySelector(".f-navbar-desktop")
      .getBoundingClientRect();
    setLeft(
      Number(e.currentTarget.getBoundingClientRect().left) -

        navbar.left 
    );
    setWidth(e.currentTarget.offsetWidth + 2);
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
                transition={{ type: "linear" }}
                animate={{ left, width }}
                className="blob"
              ></motion.div>
            </motion.div>
            <motion.div className="subpage-navigation-dropdown">
              <div className="subpage-navigation-option">
                <div className="subpage-navigation-option-icon"></div>
                <div className="subpage-navigation-option-title">Fspect</div>
              </div>
              <div className="subpage-navigation-option">
                <div className="subpage-navigation-option-icon"></div>
                <div className="subpage-navigation-option-title">
                  RstyJingle
                </div>
              </div>{" "}
              <div className="subpage-navigation-option">
                <div className="subpage-navigation-option-icon"></div>
                <div className="subpage-navigation-option-title">Portfolio</div>
              </div>{" "}
              <div className="subpage-navigation-option">
                <div className="subpage-navigation-option-icon"></div>
                <div className="subpage-navigation-option-title">SCLenz</div>
              </div>
            </motion.div>
            <ul className="navbar-content">
              <li className="subpage-navigation">
                <div className="subpage-navigation-icon"></div>
                <div className="subpage-navigation-title">
                  <div></div>MusicPlayer
                </div>
              </li>
              <li className="page-navigation">
                <NavLink to="/"
                  className="home NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                >
                  Home
                </NavLink>
                <NavLink to="/features"
                  className="features NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                >
                  Features
                </NavLink>
                <NavLink to="/download"
                  className="download NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                >
                  Download
                </NavLink>
                <NavLink to="/api"
                  className="api NavOption"
                  onClick={(e) => {
                    EventSetBlob(e);
                  }}
                  style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
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
