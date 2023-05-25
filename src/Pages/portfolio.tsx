import React, { ReactElement } from "react";
import PageBase from "../components/pageBase";
import PortfolioItem from "../components/portfolioItem";
import Image from "../components/image/image";
import { images } from "../components/image/imageImports";
import { PortfolioPageProps } from "../types";
/**
 * Renders home page layout
 */
const PortfolioPage = ({
  acceptFunction,
  videoCookiesOk,
  videoURL,
}: PortfolioPageProps): ReactElement => {
  return (
    <PageBase>
      <h1>Portfolio</h1>
      <PortfolioItem
        key={"a1"}
        headline="Cats Opinion"
        description="Blogi, jonka aiheena olivat kissat ja niiden salamyhkäinen elämä, oli saatavilla sekä englanniksi että suomeksi, mutta päätimme lopettaa bloggaamisen, koska se vei liikaa aikaa muilta projekteilta."
        usedtech={["Nuxt.js", "Heroku", "Firestore", "AWS"]}
        imageCollection={[
          <Image
            img={images.catsopinionthumb}
            alt="Cats opinion sivuston thumbnail kuva"
          />,
          <Image
            img={images.catsopinionblog}
            alt="Cats opinion sivun blogi listauksesta"
          />,
        ]}
      />
      <PortfolioItem
        key={"a2"}
        headline="Cat Quiz"
        description="Kysele ja vastaa -peli, joka sai inspiraationsa kissoista, oli täydentävä osa Cats Opinion -blogia tarjoten interaktiivista sisältöä ja viihdykettä."
        usedtech={["React", "Firebase", "Python"]}
        imageCollection={[
          <Image img={images.catquiz} alt="Cats quiz pelin etusivu" />,
          <Image
            img={images.catquizgame}
            alt="Cat quiz pelin pelin aikainen näkymä"
          />,
          <Image
            img={images.catquizend}
            alt="Cat quiz pelin jälkeinen palaute näkymä"
          />,
        ]}
        link="https://catquiz-843f1.web.app/"
      />
      <PortfolioItem
        key={"a3"}
        headline="Cat vision"
        description="Unitylla toteutettu web-selainpeli, joka havainnollistaa ihmisen ja kissan näkökyvyn eroja. Se oli osa Cats Opinion -blogin interaktiivista sisältöä."
        usedtech={["Unity", "Firebase"]}
        imageCollection={[
          <Image
            img={images.catvisiongame}
            alt="Cats vision selain pelin näkymä"
          />,
          <Image
            img={images.catvisionDifference}
            alt="Cat vision pelin kuva jossa näkyy eroavaisuuksia näkökyvyssä."
          />,
        ]}
        link="https://catvision-68afa.web.app/"
      />
      <PortfolioItem
        key={"a4"}
        headline="Footkin's halloween revolution"
        description="Teimme Unitylla yksinkertaisen Halloween-teemaisen pelin. Osallistuin neljän muun henkilön kanssa nelipäiväiseen pelijamitapahtumaan."
        usedtech={["Unity", "Universal render pipeline", "Gamejam"]}
        imageCollection={[
          <Image
            img={images.footkin}
            alt="Kuva Footkin's halloween revolution pelin päävalikosta"
          />,
          <Image
            img={images.footkinLight}
            alt="Kuva Footkin's halloween revolution pelistä"
          />,
        ]}
        downloadLink="/downloads/FootkinsHalloweenRevolution.zip"
        videoURL="https://www.youtube-nocookie.com/embed/AZPaT0EHMCY"
        videoCookiesOk={videoCookiesOk}
        acceptFunction={acceptFunction}
      />
      <PortfolioItem
        key={"a5"}
        headline="Virtuaalikirjasto"
        description="Teimme koulussa työssäoppimisjakson aikana paikalliselle kirjastolle pelin. Pelissä pelaaja suorittaa possun antamia tehtäviä ja samalla tutustuu kirjaston tarjontaan. Lisäsimme peliin myös toimivia tietokoneita, joilla voi pelata minipelejä."
        usedtech={["Unity"]}
        imageCollection={[
          <Image img={images.kirjastomenu} alt="Kirjastopelin päävalikko" />,
          <Image img={images.kirjastominigame} alt="Kirjastopelin minipeli" />,
          <Image
            img={images.kirjastopig}
            alt="Kirjaston peliä ohjaava possu hahmo"
          />,
          <Image img={images.kirjastowhole} alt="Kokonaiskuva kirjastosta" />,
        ]}
      />
      <PortfolioItem
        key={"a6"}
        headline="Unity raytracing"
        description="Tehtävänä oli esitellä joko Universal Render Pipeline (URP) -renderöintiä tai High Definition Render Pipeline (HDRP) -renderöintiä. Päätin tehdä HDRP:n avulla linnamaisen kentän, joka hyödyntää Nvidian ray tracing -tekniikkaa ja DLSS-tekniikoita."
        usedtech={["Unity", "HDRP"]}
        imageCollection={[
          <Image img={images.ray} alt="Kuva pelin päävalikosta" />,
          <Image img={images.rayfireplace} alt="Kuva pelistä" />,
          <Image img={images.rayhall} alt="Kokonaiskuva kirjastosta" />,
        ]}
        videoURL="https://www.youtube-nocookie.com/embed/iFBjlztOsMU"
        videoCookiesOk={videoCookiesOk}
        acceptFunction={acceptFunction}
      />
    </PageBase>
  );
};

export default PortfolioPage;
