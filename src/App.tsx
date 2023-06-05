import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";
import GlobalStyle from "./components/globalStyle";
import Nav from "./components/nav";
import BacktoTopButton from "./components/backToTop";
import { AnimatePresence } from "framer-motion";
import { CookieContextProvider } from "./context/CookieContext";

function App() {
  const location = useLocation();

  return (
    <GlobalStyle>
      <div
        style={{ textAlign: "center", backgroundColor: "red", marginTop: 0 }}
      >
        <small>
          <p style={{ marginTop: 0, padding: "5" }}>
            Sivuille tehdään päivityksiä, tiedot saattavat olla puutteellisia ja
            sivuston toiminta epävakaata.
          </p>
        </small>
      </div>
      <Nav
        items={[
          { id: "Etusivu", address: "/" },
          { id: "Portfolio", address: "/portfolio" },
          { id: "Yhteys", address: "/yhteys" },
        ]}
      ></Nav>
      <BacktoTopButton></BacktoTopButton>
      <AnimatePresence mode="wait">
        <CookieContextProvider>
          <Routes location={location} key={location.pathname}>
            <Route path="/portfolio" element={<PortfolioPage />}></Route>
            <Route path="/yhteys" element={<ContactPage />}></Route>
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
        </CookieContextProvider>
      </AnimatePresence>
    </GlobalStyle>
  );
}

export default App;
