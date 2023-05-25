import React, { useState } from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";

function App() {
  const [videoCookie, setVideoCookie] = useState<boolean>(false);
  const acceptGoogleCookies = (): void => setVideoCookie(true);

  return (
    <>
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
    </>
  );
}

export default App;
