import React, { ReactElement, useEffect, useRef } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  backToTopButton: {
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 19,
    borderRadius: 25,
    width: 50,
    height: 50,
    border: "none",
    cursor: "pointer",
    backgroundColor: theme.secondaryColor,
    color: theme.highlightColor,
    boxShadow: "0 0 5px 3px " + theme.highlightColor,
    transition: "box-shadow .2s",
  },
  extraShadow: {
    boxShadow: "0 0 10px 6px " + theme.highlightColor,
    transition: "box-shadow .2s",
  },
}));

const BacktoTopButton = (): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onMouseEnterStyle = () => {
      button.current?.classList.add(classes.extraShadow);
    };

    const onMouseLeaveStyle = () => {
      button.current?.classList.remove(classes.extraShadow);
    };
    button.current?.addEventListener("mouseenter", onMouseEnterStyle);
    button.current?.addEventListener("mouseleave", onMouseLeaveStyle);
  }, [classes.extraShadow]);

  return (
    <>
      <button
        ref={button}
        className={classes.backToTopButton}
        onClick={() => window.scrollTo({ behavior: "smooth", left: 0, top: 0 })}
        aria-label="Palaa takaisin ylös"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-arrow-bar-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </>
  );
};

export default BacktoTopButton;
