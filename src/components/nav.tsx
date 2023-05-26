import React, { ReactElement, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../types";
import Contact from "./contact";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  navMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.mainColor,
    position: "fixed",
    padding: "2em",
    height: "100%",
    right: 0,
    border: "1px solid " + theme.secondaryColor,
    boxShadow: "-1px -1px 5px 2px " + theme.secondaryColor,
    borderRadius: "20px 0px 0px 0px",
    opacity: 0,
    width: "90%",
    zIndex: 21,
    "@media only screen and (min-width: 900px)": {
      width: "40%",
    },
    "@media only screen and (min-width: 1200px)": {
      width: "30%",
    },
    transform: "translateX(400px)",
    transition: "transform .5s, opacity .5s, visibility .5s",
    visibility: "hidden",
  },
  navHeader: {
    color: theme.highlightColor,
  },
  menuButton: {
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 22,
    borderRadius: 25,
    width: 50,
    height: 50,
    border: "none",
    cursor: "pointer",
    transform: "rotate(0deg)",
    transition: "transform .5s",
  },
  navButton: {
    backgroundColor: "rgba(1,1,1,0)",
    border: "none",
    fontSize: "1.25rem",
    display: "block",
    marginTop: 20,
    color: theme.linkColor,
    textDecoration: "underline",
    cursor: "pointer",
  },
  show: {
    visibility: "visible",
    transform: "translateX(0)",
    opacity: 1,
    transition: "transform .5s, opacity .5s, visibility .5s",
  },
  openButtonAnimation: {
    transform: "rotate(90deg)",
    transition: "transform .5s",
  },
}));

const Nav = (props: { items: NavProps[] }): ReactElement => {
  const [active, setActive] = useState<boolean>(false);
  const navmenu = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });

  return (
    <nav>
      <div
        ref={navmenu}
        className={classes.navMenu + " " + (active ? classes.show : "")}
      >
        <div>
          <h2 className={classes.navHeader}>Navigointi</h2>
          {props.items.map((element) => (
            <Link
              key={element.id}
              className={classes.navButton}
              aria-label={`Avaa sivu ${element.id}`}
              to={element.address}
              onClick={() => setActive(!active)}
            >
              {element.id}
            </Link>
          ))}
        </div>
        <div>
          <Contact />
        </div>
      </div>

      <button
        ref={openButtonRef}
        className={
          classes.menuButton + " " + (active ? classes.openButtonAnimation : "")
        }
        type="button"
        onClick={() => setActive(!active)}
        aria-label="Avaa navigointi valikko"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
