import React, { ReactElement } from "react";
import BacktoTopButton from "./backToTop";
import Nav from "./nav";
import { PageBaseProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import Contact from "./contact";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  container: {
    width: "90%",
    padding: 20,
    margin: 0,
    marginLeft: "auto",
    marginRight: "auto",
    "@media only screen and (min-width: 1000px)": {
      width: "75%",
    },
    "@media only screen and (min-width: 1200px)": {
      width: "60%",
    },
  },
  contactSpacer: {
    height: 50,
  },
}));

/**
 * Provides basic layout for page and navigation components
 * @param param0
 * @returns
 */
const PageBase = ({ children, renderContact }: PageBaseProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      {/* Nav and back to top buttons */}
      <Nav
        items={[
          { id: "Etusivu", address: "/" },
          { id: "Portfolio", address: "/portfolio" },
          { id: "Yhteys", address: "/yhteys" },
        ]}
      ></Nav>
      <BacktoTopButton></BacktoTopButton>

      <>{children}</>
      <div className={classes.contactSpacer}></div>
      <hr></hr>
      <div className={classes.contactSpacer}></div>
      {renderContact === undefined && <Contact />}
    </div>
  );
};

export default PageBase;
