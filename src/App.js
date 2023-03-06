import React, { createContext, useState } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Router, Routes } from "react-router-dom";
import { Trial } from "./components/Trial";
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

export const loginContext = createContext();
export const mobileContext = createContext();

function App() {
  const [loggedIn, setloggedIn] = useState(true);
  const [isMobile, setisMobile] = useState(window.innerWidth < 625);
  window.addEventListener("resize", (e) => {
    if (loggedIn) {
      setisMobile(window.innerWidth < 595);
    } else {
      setisMobile(window.innerWidth < 570);
    }
  });

  return (
    <loginContext.Provider value={[loggedIn, setloggedIn]}>
      <mobileContext.Provider value={isMobile}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/Fspect" element={<Fspect />}>
                <Route path="/Fspect/home" element={<FspectHome />} />
                <Route path="/Fspect/statistics" element={<FspectStats />} />
                <Route path="/Fspect/works" element={<FspectWorks />} />
              </Route>
              <Route path="/Portfolio" element={<Portfolio />}>
                <Route path="/Portfolio/works" element={<PortfolioWorks />} />
                <Route
                  path="/Portfolio/aboutme"
                  element={<PortfolioAboutme />}
                />
                <Route path="/Portfolio/cv" element={<PortfolioCV />} />
              </Route>
            </Routes>
            <NavbarFinal />
          </BrowserRouter>
        </div>
      </mobileContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
