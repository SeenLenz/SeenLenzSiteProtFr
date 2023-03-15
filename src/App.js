import { Route } from "react-router";

import React, { createContext, useState } from "react";
import { BrowserRouter, Router, Routes, useLocation } from "react-router-dom";
import { Trial } from "./components/Trial/Trial";
import { NavbarFinal } from "./components/NavbarFinal";
import ReorderComponent from "./components/ReorderComponent";

import { Portfolio } from "./components/Portfolio/Portfolio";
import { PortfolioCV } from "./components/Portfolio/PortfolioCV";
import { PortfolioAboutme } from "./components/Portfolio/PortfolioAboutme";
import { PortfolioWorks } from "./components/Portfolio/PortfolioWorks";

import { Fspect } from "./components/Fspect/Fspect";
import { FspectHome } from "./components/Fspect/FspectHome";
import { FspectWorks } from "./components/Fspect/FspectWorks";
import { FspectStats } from "./components/Fspect/FspectStats";
import { AnimNavbar } from "./components/Trial/AnimNavbar";

import { motion, AnimatePresence } from "framer-motion";
import { useRoutes } from "react-router-dom";

export const loginContext = createContext();
export const mobileContext = createContext();
export const navtreeContext = createContext();
export const leftContext = createContext();

function App() {
  const [loggedIn, setloggedIn] = useState(true);
  const [isMobile, setisMobile] = useState(window.innerWidth < 625);
  const [left, setleft] = useState(false);
  const [navTree, setnavTree] = useState({
    Portfolio: {
      id: 1,
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
      id: 2,
      to: "/Fspect",
      img: "../img/PPictures/Fspect.svg",
      title: "Fspect",
      active: false,
      pages: [
        ["Home", "/home"],
        ["Stats", "/statistics"],
        ["Api", "/api"],
      ],
    },
    RstyJingle: {
      id: 3,
      to: "/RstyJingle",
      img: "../img/PPictures/RstyJingle.svg",
      title: "RstyJingle",
      active: false,
      pages: [
        ["Home", "/home"],
        ["Stats", "/statistics"],
        ["Api", "/api"],
      ],
    },
    SCLenz: {
      id: 4,
      to: "/SCLenz",
      img: "../img/PPictures/SCLenz.svg",
      title: "SCLenz",
      active: false,
      pages: [
        ["Home", "/home"],
        ["Stats", "/statistics"],
        ["Download", "/download"],
      ],
    },
    MusicPlayer: {
      id: 5,
      to: "/MusicPlayer",
      img: "../img/PPictures/SCLenz.svg",
      title: "SCLenz",
      active: false,
      pages: [
        ["Home", "/home"],
        ["Stats", "/statistics"],
        ["Download", "/download"],
      ],
    },
  });

  window.addEventListener("resize", (e) => {
    if (loggedIn) {
      setisMobile(window.innerWidth < 595);
    } else {
      setisMobile(window.innerWidth < 570);
    }
  });

  const location = useLocation();

  return (
    <loginContext.Provider value={[loggedIn, setloggedIn]}>
      <mobileContext.Provider value={isMobile}>
        <navtreeContext.Provider value={[navTree, setnavTree]}>
          <leftContext.Provider value={[left, setleft]}>
            <div className="App">
              <AnimatePresence mode="sync">
                <Routes key={location.pathname} location={location}>
                  <Route path="/Fspect" element={<Fspect />}>
                    <Route path="home" element={<AnimNavbar />} />
                    <Route path="statistics" element={<FspectStats />} />
                    <Route path="works" element={<FspectWorks />} />
                  </Route>
                  <Route path="/Portfolio" element={<Portfolio />} exact>
                    <Route path="works" element={<PortfolioWorks />} />
                    <Route path="aboutme" element={<PortfolioAboutme />} />
                    <Route path="cv" element={<PortfolioCV />} />
                  </Route>
                </Routes>
              </AnimatePresence>
              <NavbarFinal />
            </div>
          </leftContext.Provider>
        </navtreeContext.Provider>
      </mobileContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
