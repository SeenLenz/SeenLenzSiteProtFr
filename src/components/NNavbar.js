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

export function NNavbar() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [blobState, setblobState] = useState("home");
  const [currentNav, setcurrentNav] = useState("home");
  const [width, setWidth] = useState(25);
  const [height, setHeight] = useState(25);
  const [left, setLeft] = useState();
  const [top, setTop] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener("resize", (e) => {
      console.log("asdasd");
      let target = document.querySelector(`.${currentNav}`);
      let blob = document.querySelector(`.blob`);
      setLeft(
        Number(target.getBoundingClientRect().left) -
          target.offsetWidth / 6 -
          document.querySelector(".nnavbar-desktop").getBoundingClientRect().x +
          8
      );
    });
  }, [currentNav]);

  useLayoutEffect((e) => {
    let target = document.querySelector(`.home`);
    setLeft(
      Number(target.getBoundingClientRect().left) -
        target.offsetWidth / 6 -
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().x +
        8
    );
    setTop(
      Number(target.getBoundingClientRect().top) -
        target.offsetHeight / 6 -
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().y -
        0.5
    );
    setWidth(target.offsetWidth + 2);
    setHeight(target.offsetHeight * 1.4);
    setOpacity(1);
  }, []);

  function EventSetBlob(e) {
    setcurrentNav(`${e.target.classList[0]}`);
    setLeft(
      Number(e.currentTarget.getBoundingClientRect().left) -
        e.currentTarget.offsetWidth / 6 -
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().x +
        8
    );
    setTop(
      Number(e.currentTarget.getBoundingClientRect().top) -
        e.currentTarget.offsetHeight / 6 -
        document.querySelector(".nnavbar-desktop").getBoundingClientRect().y -
        0.5
    );
    setWidth(e.currentTarget.offsetWidth + 2);
    setHeight(e.currentTarget.offsetHeight * 1.4);
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
          <div className="nnavbar-desktop">
            <motion.div className="navbar-animation-wrapper">
              <motion.div
                transition={{ type: "linear" }}
                initial={{ opacity: 0 }}
                animate={{ left, top, width, height, opacity }}
                className="blob"
              ></motion.div>
            </motion.div>
            <ul className="navbar-content">
              <li>
                <button
                  className="home"
                  onClick={(e) => {
                    EventSetBlob(e);
                    console.log(
                      document
                        .querySelector(".nnavbar-desktop")
                        .getBoundingClientRect()
                    );
                  }}
                >
                  home
                </button>
              </li>{" "}
              <li>
                <button
                  className="aboutme"
                  onClick={(e) => {
                    EventSetBlob(e);
                    console.log(
                      document
                        .querySelector(".nnavbar-desktop")
                        .getBoundingClientRect()
                    );
                  }}
                >
                  aboutme
                </button>
              </li>{" "}
              <li>
                <button
                  className="portfolio"
                  onClick={(e) => {
                    EventSetBlob(e);
                    console.log(
                      document
                        .querySelector(".nnavbar-desktop")
                        .getBoundingClientRect()
                    );
                  }}
                >
                  portfolio
                </button>
              </li>
              <li>
                <button
                  className="sclenz"
                  onClick={(e) => {
                    EventSetBlob(e);
                    console.log(
                      document
                        .querySelector(".nnavbar-desktop")
                        .getBoundingClientRect()
                    );
                  }}
                >
                  sclenz
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
