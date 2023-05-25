import React, { ReactElement } from "react";
import { VideoComponentProps } from "../types";

const VideoComponent = ({
  videoCookiesOk,
  videoURL,
  acceptFunction,
}: VideoComponentProps): ReactElement => {
  if (videoCookiesOk) {
    return (
      <div className="videoFrame">
        <iframe
          src={videoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  } else {
    return (
      <div className="video-cookie-banner">
        <h4>Hyväksy evästeet katsoaksesi sisällytetyn videon.</h4>
        <p>
          <u>
            Google ja Youtube asettavat sisälletyille videoille evästeitä.
            Google kerää esimerkiksi seuraavia tietoja:
          </u>
        </p>
        <ul>
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
        {acceptFunction !== undefined && (
          <button type="button" onClick={() => acceptFunction()}>
            Hyväksy evästeet
          </button>
        )}
      </div>
    );
  }
};

export default VideoComponent;
