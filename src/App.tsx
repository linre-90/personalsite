import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";
import GlobalStyle from "./components/globalStyle";
import Nav from "./components/nav";
import BacktoTopButton from "./components/backToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const [videoCookie, setVideoCookie] = useState<boolean>(false);
  const acceptGoogleCookies = (): void => setVideoCookie(true);
  const location = useLocation();
  return (
    <GlobalStyle>
      <Nav
        items={[
          { id: "Etusivu", address: "/" },
          { id: "Portfolio", address: "/portfolio" },
          { id: "Yhteys", address: "/yhteys" },
        ]}
      ></Nav>
      <BacktoTopButton></BacktoTopButton>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                acceptFunction={acceptGoogleCookies}
                videoCookiesOk={videoCookie}
              />
            }
          ></Route>
          <Route path="/yhteys" element={<ContactPage />}></Route>
          <Route
            path="*"
            element={
              <HomePage
                videoCookiesOk={videoCookie}
                acceptFunction={acceptGoogleCookies}
              />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </GlobalStyle>
  );
}

export default App;
