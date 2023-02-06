import { Navbar } from "./components/Navbar";
import React, { createContext, useState } from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Router, Routes } from "react-router-dom";
import { Gallery } from "./components/Gallery";

export const loginContext = createContext();
export const mobileContext = createContext();

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < 625);
  window.addEventListener("resize", (e) => {
    if (loggedIn) {
      setisMobile(window.innerWidth < 500);
    } else {
      setisMobile(window.innerWidth < 570);
    }
  });

  return (
    <loginContext.Provider value={[loggedIn, setloggedIn]}>
      <mobileContext.Provider value={isMobile}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Gallery />} />
            </Routes>
          </BrowserRouter>
        </div>
      </mobileContext.Provider>
    </loginContext.Provider>
  );
}

export default App;