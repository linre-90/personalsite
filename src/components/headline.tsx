import React, { ReactElement } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  headlineWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100vh",
    paddingBottom: 50,
  },
  headlineSpecial: {
    fontSize: "1rem",
    "& :last-child": {
      marginTop: 20,
      textAlign: "center",
    },
    "@media only screen and (min-width: 296px)": {
      fontSize: "1.35rem",
    },
    "@media only screen and (min-width: 688px)": {
      fontSize: "2rem",
    },
    "@media only screen and (min-width: 1270px)": {
      fontSize: "3rem",
    },
  },
  specialColorHeader: {
    color: theme.highlightColor,
  },
  divider: {
    width: "100%",
  },
  "@keyframes slidein": {
    from: { transform: "translateX(-200px)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1, visibility: "visible" },
  },
  header1: {
    animation: "$slidein",
    animationDuration: 1000,
    animationFillMode: "forwards",
    visibility: "hidden",
  },
  header2: {
    animationDelay: 1000,
    animation: "$slidein",
    animationFillMode: "forwards",
    animationDuration: 1000,
    visibility: "hidden",
    marginTop: 5,
    marginBottom: 5,
  },
  header3: {
    animation: "$slidein",
    animationDuration: 1000,
    animationFillMode: "forwards",
    animationDelay: 2000,
    visibility: "hidden",
  },
  "@keyframes arrow": {
    "0%": { transform: "scaleY(1)" },
    "25%": { transform: "scale(1.1)" },
  },
  animatedArrow: {
    animation: "$arrow",
    animationDuration: 1000,
    animationIterationCount: "infinite",
  },
  "@keyframes slideupwards": {
    from: { transform: "translateY(400px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1, visibility: "visible" },
  },
  slideup: {
    animation: "$slideupwards",
    animationDuration: 1000,
    animationDelay: 3000,
    visibility: "hidden",
    animationFillMode: "forwards",
  },
}));

const Headline = (): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.headlineWrapper}>
      <h1 className={classes.headlineSpecial}>
        <div className={classes.header1}>Etsitkö</div>
        <div className={classes.header2}>
          <u>seuraavaa</u>
        </div>
        <div className={classes.header3 + " " + classes.specialColorHeader}>
          ohjelmisto
          <br />
          kehittäjääsi?
        </div>
        <div className={classes.slideup}>
          <div className={classes.animatedArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          </div>
        </div>
      </h1>
      <hr className={classes.divider}></hr>
    </div>
  );
};

export default Headline;
