import React from "react";
import { PageBaseProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    body: {
      fontFamily: theme.textFont,
      margin: 0,
      padding: 0,
      backgroundColor: theme.mainColor,
      overflowX: "hidden",
    },
    "p, span, a": {
      color: theme.textColor,
      lineHeight: "1.5rem",
    },
    ul: {
      listStyle: "none",
      paddingLeft: 0,
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: theme.headerFont,
      color: theme.textColor,
    },
    "a,button": {
      fontFamily: theme.textFont,
    },
  },
}));

const GlobalStyle = ({ children }: PageBaseProps): React.ReactElement => {
  const theme = useTheme<Dark | Light>();
  useStyles({ theme });
  return <div>{children}</div>;
};

export default GlobalStyle;
