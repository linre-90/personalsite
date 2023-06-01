import React, { ReactElement, useEffect, useRef, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import { CookieNoticeProps } from "../types";

const useStyles = createUseStyles((theme: Dark | Light) => ({
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
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 5,
    width: "100%",
    "@media only screen and (min-width: 830px)": {
      width: "50%",
    },
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
 * Cookie prompt for content that sets cookies in website.
 * Pass content that sets cookies as children and they are only rendered if cookies are accepted.
 * @param param0
 * @returns
 */
const CookieNotice = ({ children }: CookieNoticeProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  const [cookieOk, setCookieOk] = useState<boolean>(
    window.sessionStorage.getItem("videocookie") ? true : false
  );

  const cookieButtonRef = useRef<HTMLButtonElement>(null);

  const approveCookies = () => {
    window.sessionStorage.setItem("videocookie", "ok");
    setCookieOk(true);
  };

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
  if (!cookieOk) {
    return (
      <>
        <div className={classes.cookieBanner}>
          <div className={classes.cookiebannerItem}>
            <div>
              <h4>Hyväksy evästeet katsoaksesi sisältöä!</h4>
              <p>
                Google ja Youtube asettavat upotetuilla videoilla evästeitä.
              </p>
            </div>
            <div>
              <p>
                Painamalla "Hyväksy evästeet" nappia tallennamme suostumuksesi
                käynnissä olevan selain session ajaksi. Suostumuksen saa
                tyhjennettyä esimerkiksi poistamalla selaushistorian.
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
            <p>Google kerää esimerkiksi seuraavia tietoja:</p>
            <ul>
              <li>- Hakuhistoria</li>
              <li>- Katsotut videot</li>
              <li>- Näytöt ja mainosten klikkaukset</li>
              <li>- Ääni ja puhe</li>
              <li>- Ostokäyttäytyminen</li>
              <li>- Ihmiset joiden kanssa olet yhteydessä tai jaat sisältöä</li>
              <li>
                - Käyttäytymistä kolmanneosapuolen sivuilla ja applikaatioissa
              </li>
              <li>- Chromen selaushistoria (sisäänkirjautuneilla)</li>
              <li>- Laitteen GPS tietoja</li>
              <li>- Ip osoite</li>
              <li>- Aktiviteetit Googlen palveluissa (esimerkiksi haut)</li>
              <li>
                - Tietoa ympäröivistä wifi verkoista, puhelinmastoista ja
                bluetooth laitteista
              </li>
            </ul>
            <a href="https://policies.google.com/privacy?hl=en-US">
              Lue Google tietosuoja seloste tästä
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default CookieNotice;
