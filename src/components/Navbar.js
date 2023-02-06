import { useContext, useState, useRef, useLayoutEffect } from "react";
import { loginContext, mobileContext } from "../App";
import signature from "../img/signature.png";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

export function Navbar() {
  const [loggedIn, setloggedIn] = useContext(loginContext);
  const isMobile = useContext(mobileContext);
  const [to, setTo] = useState({ opacity: 0 });
  const [from, setFrom] = useState({ opacity: 1 });
  const boxRef = useRef();

  return (
    <>
      {isMobile ? (
        <header>
          <div className="navbar-desktop">
            <div className="navbar-animation-wrapepr">
              <div className="navbar-active-highlight" />
            </div>
            <ul className="navbar-content">
              <li className="logo">
                <NavLink to="/" className="navigation-route-img">
                  {" "}
                  <img src={signature} alt="React Logo" />
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      ) : (
        <header>
          <div className="navbar-desktop">
            <div className="navbar-animation-wrapepr">
              <div className="navbar-active-highlight" />
            </div>
            <ul className="navbar-content">
              <li className="logo">
                <NavLink to="/" className="navigation-route-img">
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
                      onClick={boxRef}
                    >
                      Fspect
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Projects" className="navigation-route">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/AboutMe" className="navigation-route ">
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