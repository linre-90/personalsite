import React, { ReactElement, useEffect, useRef, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import { ViewpfProps } from "../types";
import { useContent } from "../hooks/content";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  viewpfcontainer: {
    position: "fixed",
    /*zIndex: 30,*/
    top: 0,
    bottom: 10,
    left: 10,
    right: 10,
    overflowY: "scroll",
    backgroundColor: theme.mainColor,
    "@media only screen and (min-width: 1200px)": {
      left: 100,
      right: 100,
    },
    "@media only screen and (min-width: 1550px)": {
      left: 200,
      right: 200,
    },
  },
  backdrop: {
    /*zIndex: 29,*/
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closebtn: {
    display: "block",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "rgba(0,0,0,0)",
    border: 0,
    cursor: "pointer",
    color: theme.highlightColor,
    "@media only screen and (min-width: 1200px)": {
      marginRight: 50,
    },
  },
  readMoreButton: {
    backgroundColor: "rgba(0,0,0,0)",
    border: `1px solid ${theme.highlightColor}`,
    borderRadius: 5,
    padding: 10,
    cursor: "pointer",
    color: theme.highlightColor,
  },
  readerhide: {
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 1s, opacity 1s",
    zIndex: 31,
  },
  readershow: {
    visibility: "visible",
    opacity: 1,
    transition: "visibility 1s, opacity 1s",
    zIndex: 31,
  },
}));

/**
 * Renders overlay read container to display more detailed portfolio post.
 * @param param0
 * @returns
 */
const Viewpf = ({ children, content }: ViewpfProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  /** Custom content fetching hook. Returns renderable content. */
  const contentd = useContent(content);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      wrapperRef.current?.classList.add(classes.readershow);
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      wrapperRef.current?.classList.remove(classes.readershow);
    }
  }, [visible, classes.readershow]);

  return (
    <>
      <div ref={wrapperRef} className={classes.readerhide}>
        <div className={classes.backdrop}></div>
        <div className={classes.viewpfcontainer}>
          <button
            onClick={() => setVisible(false)}
            className={classes.closebtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          {contentd}
          {children}
        </div>
      </div>
      <button
        className={classes.readMoreButton}
        onClick={() => setVisible(true)}
      >
        Read more!
      </button>
    </>
  );
};

export default Viewpf;
