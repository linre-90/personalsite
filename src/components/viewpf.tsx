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
    zIndex: 31,
  },
  readershow: {
    visibility: "visible",
    opacity: 1,
    transition: "visibility 1s, opacity 1s",
    zIndex: 31,
  },
  cookieBanner: {
    display: "flex",
    flexWrap: "wrap",
    border: `1px solid ${theme.highlightColor}`,
    padding: 10,
    color: theme.textColor,
    "& ul": {
      fontSize: ".75rem",
    },
  },
  cookiebannerItem: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  videoCookieBannerButton: {
    display: "block",
    height: 60,
    width: 100,
    backgroundColor: "rgba(16, 211, 42, .5)",
    borderRadius: 10,
    border: "3px solid green",
    color: "black",
    marginTop: 10,
    transition: "height .2s, width .2s, background-color .2s",
  },
  videoCookieBannerButtonHover: {
    height: 70,
    width: 110,
    cursor: "pointer",
    transition: "height .2s, width .2s, background-color .2s",
    backgroundColor: "rgba(16, 211, 42, 1)",
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
  const contentd = useContent(content);
  const [visible, setVisible] = useState<boolean>(false);
  const [videoCookies, setVideoCookies] = useState<boolean>(
    window.sessionStorage.getItem("videocookie") ? true : false
  );
  const cookieButtonRef = useRef<HTMLButtonElement>(null);

  const approveCookies = () => {
    window.sessionStorage.setItem("videocookie", "ok");
    setVideoCookies(true);
  };

  useEffect(() => {
    if (visible) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      wrapperRef.current?.classList.add(classes.readershow);
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      wrapperRef.current?.classList.remove(classes.readershow);
    }
    cookieButtonRef.current?.addEventListener("mouseenter", () => {
      cookieButtonRef.current?.classList.add(
        classes.videoCookieBannerButtonHover
      );
    });
    cookieButtonRef.current?.addEventListener("mouseleave", () => {
      cookieButtonRef.current?.classList.remove(
        classes.videoCookieBannerButtonHover
      );
    });
  }, [visible, classes.readershow, classes.videoCookieBannerButtonHover]);

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
    } else if (containsVideoContent && videoCookies) {
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
        <div className={classes.cookieBanner}>
          <div className={classes.cookiebannerItem}>
            <div>
              <h4>Hyväksy evästeet katsoaksesi sisältöä!</h4>
              <p>
                Google ja Youtube asettavat sisälletyille videoille evästeitä.
              </p>
            </div>
            <div>
              <p>
                Painamalla "Hyväksy evästeet" nappia tallennamme suostumuksesi
                evästeeseen.
              </p>
              <button
                ref={cookieButtonRef}
                className={classes.videoCookieBannerButton}
                type="button"
                onClick={() => approveCookies()}
              >
                Hyväksy evästeet
              </button>
            </div>
          </div>
          <div className={classes.cookiebannerItem}>
            <p>
              <u>Google kerää esimerkiksi seuraavia tietoja:</u>
            </p>
            <ul>
              <li>Hakuhistoria</li>
              <li>Katsotut videot</li>
              <li>Näytöt ja mainosten klikkaukset</li>
              <li>Ääni ja puhe</li>
              <li>Ostokäyttäytyminen</li>
              <li>Ihmiset joiden kanssa olet yhteydessä tai jaat sisältöä</li>
              <li>
                Käyttäytymistä kolmanneosapuolen sivuilla ja applikaatioissa
              </li>
              <li>Chromen selaushistoria (sisäänkirjautuneilla)</li>
              <li>Laitteen GPS tietoja</li>
              <li>Ip osoite</li>
              <li>Aktiviteetit Googlen palveluissa (esimerkiksi haut)</li>
              <li>
                Tietoa ympäröivistä wifi verkoista, puhelinmastoista ja
                bluetooth laitteista
              </li>
            </ul>
            <a href="https://policies.google.com/privacy?hl=en-US">
              Lue Google tietosuoja seloste tästä
            </a>
          </div>
        </div>
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
          {contentd}
          {children}
        </div>
      </div>
      {getShowButton()}
    </>
  );
};

export default Viewpf;
