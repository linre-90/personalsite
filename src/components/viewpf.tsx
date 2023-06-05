import React, { ReactElement, useEffect, useRef, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import { ViewpfProps } from "../types";
import CookieNotice from "./cookieNotice";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  viewpfcontainer: {
    position: "fixed",
    zIndex: 30,
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
    zIndex: 29,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closebtn: {
    display: "block",
    marginLeft: 20,
    marginRight: "auto",
    marginTop: 30,
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
  },
  readershow: {
    visibility: "visible",
    opacity: 1,
    transition: "visibility 1s, opacity 1s",
  },
  contentStyling: {
    padding: 40,
  },
  contentCR: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
}));

/**
 * Renders overlay read container to display more detailed portfolio post.
 * @param param0
 * @returns
 */
const Viewpf = ({
  children,
  content,
  containsVideoContent,
}: ViewpfProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  /** Custom content fetching hook. Returns renderable content. */
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

  const getShowButton = () => {
    if (!containsVideoContent) {
      return (
        <button
          className={classes.readMoreButton}
          onClick={() => setVisible(true)}
        >
          Lue lisää!
        </button>
      );
    } else {
      return (
        <CookieNotice>
          {
            <button
              className={classes.readMoreButton}
              onClick={() => setVisible(true)}
            >
              Lue lisää!
            </button>
          }
        </CookieNotice>
      );
    }
  };

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
          <div className={classes.contentStyling}>
            {content}
            {children}
            <p className={classes.contentCR}>
              <small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-c-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z" />
                </svg>{" "}
                Juho Lindemark 2023
              </small>
            </p>
          </div>
        </div>
      </div>
      {getShowButton()}
    </>
  );
};

export default Viewpf;
