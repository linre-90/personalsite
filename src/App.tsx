import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";
import GlobalStyle from "./components/globalStyle";
import Nav from "./components/nav";
import BacktoTopButton from "./components/backToTop";

function App() {
  const [videoCookie, setVideoCookie] = useState<boolean>(false);
  const acceptGoogleCookies = (): void => setVideoCookie(true);

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
      <Routes>
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
    </GlobalStyle>
  );
}

export default App;
