import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";
import GlobalStyle from "./components/globalStyle";

function App() {
  const [videoCookie, setVideoCookie] = useState<boolean>(false);
  const acceptGoogleCookies = (): void => setVideoCookie(true);

  return (
    <GlobalStyle>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              videoCookiesOk={videoCookie}
              acceptFunction={acceptGoogleCookies}
            />
          }
        ></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/yhteys" element={<ContactPage />}></Route>
        <Route path="*"></Route>
      </Routes>
    </GlobalStyle>
  );
}

export default App;
