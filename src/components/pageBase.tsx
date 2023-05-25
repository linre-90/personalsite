import React, { ReactElement } from "react";
import BacktoTopButton from "./backToTop";
import Nav from "./nav";
import { PageBaseProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

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
}));

/**
 * Provides basic layout for page and navigation components
 * @param param0
 * @returns
 */
const PageBase = ({ children }: PageBaseProps): ReactElement => {
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
    </div>
  );
};

export default PageBase;
