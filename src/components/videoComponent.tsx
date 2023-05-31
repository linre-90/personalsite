import React, { ReactElement, useRef, useEffect } from "react";
import { VideoComponentProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  videoFrame: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%",
    marginBottom: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 0,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  videoCookieBanner: {
    backgroundColor: theme.secondaryColor,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  videoCookieBannerUl: {
    color: theme.textColor,
    paddingLeft: 40,
    fontSize: ".75rem",
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
 * Renders embedded youtube video components with correct sizes.
 * @param param0
 * @returns
 */
const VideoComponent = ({
  videoCookiesOk,
  videoURL,
  acceptFunction,
}: VideoComponentProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  const cookieButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
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
  }, [classes.videoCookieBannerButtonHover]);

  if (videoCookiesOk) {
    return (
      <div className={classes.videoFrame}>
        <iframe
          className={classes.video}
          src={videoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  } else {
    return (
      <div className={classes.videoCookieBanner}>
        <h4>Hyväksy evästeet katsoaksesi sisällytetyn videon.</h4>
        <p>
          <u>
            Google ja Youtube asettavat sisälletyille videoille evästeitä.
            Google kerää esimerkiksi seuraavia tietoja:
          </u>
        </p>
        <ul className={classes.videoCookieBannerUl}>
          <li>Hakuhistoria</li>
          <li>Katsotut videot</li>
          <li>Näytöt ja mainosten klikkaukset</li>
          <li>Ääni ja puhe</li>
          <li>Ostokäyttäytyminen</li>
          <li>Ihmiset joiden kanssa olet yhteydessä tai jaat sisältöä</li>
          <li>Käyttäytymistä kolmanneosapuolen sivuilla ja applikaatioissa</li>
          <li>Chromen selaushistoria (sisäänkirjautuneilla)</li>
          <li>Laitteen GPS tietoja</li>
          <li>Ip osoite</li>
          <li>Aktiviteetit Googlen palveluissa (esimerkiksi haut)</li>
          <li>
            Tietoa ympäröivistä wifi verkoista, puhelinmastoista ja bluetooth
            laitteista
          </li>
        </ul>
        <a href="https://policies.google.com/privacy?hl=en-US">
          Lue Google tietosuoja seloste tästä
        </a>
        <p>
          Painamalla "Hyväksy evästeet" nappia tallennamme suostumuksesi
          evästeeseen.
        </p>
        {acceptFunction !== undefined && (
          <button
            ref={cookieButtonRef}
            className={classes.videoCookieBannerButton}
            type="button"
            onClick={() => acceptFunction()}
          >
            Hyväksy evästeet
          </button>
        )}
      </div>
    );
  }
};

export default VideoComponent;
