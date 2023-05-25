import React, { ReactElement } from "react";
import BacktoTopButton from "./backToTop";
import Nav from "./nav";
import { PageBaseProps } from "../types";

const PageBase = ({ children }: PageBaseProps): ReactElement => {
  return (
    <div className="container">
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
