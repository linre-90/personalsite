import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import PortfolioPage from "./Pages/portfolio";
import ContactPage from "./Pages/contact";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "./theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  globalStyles: {
    "& p, span, a": {
      color: theme.textColor,
    },
    "& ul": {
      listStyle: "none",
      paddingLeft: 0,
    },
    "& h1,h2,h3,h4,h5,h6": {
      fontFamily: theme.headerFont,
      color: theme.textColor,
    },
    "& a,button": {
      fontFamily: theme.textFont,
    },
  },
}));

function App() {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  const [videoCookie, setVideoCookie] = useState<boolean>(false);
  const acceptGoogleCookies = (): void => setVideoCookie(true);

  return (
    <div className={classes.globalStyles}>
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
    </div>
  );
}

export default App;
