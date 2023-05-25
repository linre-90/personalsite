import React, { ReactElement } from "react";
import PageBase from "../components/pageBase";
import Contact from "../components/contact";
/**
 * Renders home page layout
 */
const ContactPage = (): ReactElement => {
  return (
    <PageBase>
      <Contact />
    </PageBase>
  );
};

export default ContactPage;
