import React, { ReactElement, Children, ReactFragment } from "react";
import BacktoTopButton from "./backToTop";
import Nav from "./nav";

interface PageBaseProps {
  children?:
    | typeof Children
    | (typeof Children)[]
    | ReactElement
    | ReactElement[]
    | ReactFragment
    | undefined;
}

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
