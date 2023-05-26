import React, { ReactElement } from "react";
import PageBase from "../components/pageBase";
import Contact from "../components/contact";
import { motion } from "framer-motion";

/**
 * Renders home page layout
 */
const ContactPage = (): ReactElement => {
  return (
    <motion.main
      initial={{ opacity: 0, visibility: "hidden", x: 500 }}
      animate={{ opacity: 1, visibility: "visible", x: 0 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBase renderContact={false}>
        <Contact />
      </PageBase>
    </motion.main>
  );
};

export default ContactPage;
