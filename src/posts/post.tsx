import React from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import { PostProps } from "../types";

/** Construct single portfolio detail post with this component */
const useStyles = createUseStyles((theme: Dark | Light) => ({
  postStyling: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    "@media only screen and (min-width: 830px)": {
      width: "80%",
    },
    "& img": {
      width: "100%",
      height: "auto",
    },
    "& figure": {
      marginTop: 60,
      marginBottom: 60,
      marginLeft: 0,
      width: "80%",
      height: "auto",
    },
    "& figcaption": {
      font: theme.textFont,
      color: theme.textColor,
    },
    "& p": {
      lineHeight: "1.6rem",
      letterSpacing: ".04rem",
    },
    "& #spacer": {
      height: 60,
    },
  },
}));

const Post = ({ children }: PostProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  return <div className={classes.postStyling}>{children}</div>;
};

export default Post;
