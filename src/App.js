import { Navbar } from "./components/Navbar";
import React, { createContext, useState } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Router, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Trial } from "./components/Trial";
import { NNavbar } from "./components/NNavbar";
import { NavbarFinal } from "./components/NavbarFinal";

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
          {/* <Trial /> */}
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Gallery />} />
              <Route path="/fspect" element={<Trial />} /> */}
            </Routes>
            <NavbarFinal />
          </BrowserRouter>
        </div>
      </mobileContext.Provider>
    </loginContext.Provider>
  );
}

export default App;
