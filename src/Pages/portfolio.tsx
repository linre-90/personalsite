import React, { ReactElement } from "react";
import PageBase from "../components/pageBase";
import PortfolioItem from "../components/portfolioItem";
import Image from "../components/image/image";
import { images } from "../components/image/imageImports";
import { motion } from "framer-motion";
import { ContentSelector } from "../enums";

/**
 * Renders portfolio listing and reader
 */
const PortfolioPage = (): ReactElement => {
  return (
    <motion.main
      initial={{ opacity: 0, visibility: "hidden", x: -500 }}
      animate={{ opacity: 1, visibility: "visible", x: 0 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBase>
        <PortfolioItem
          readContent={ContentSelector.Catsopinion}
          key={"a1"}
          headline="Cats Opinion"
          description="Blogi, jonka aiheena olivat kissat ja niiden salamyhkäinen elämä, oli saatavilla sekä englanniksi että suomeksi, mutta päätimme lopettaa bloggaamisen, koska se vei liikaa aikaa muilta projekteilta."
          usedtech={["Nuxt.js", "Heroku", "Firestore", "AWS"]}
          containsVideoContent={false}
          thumbnailImage={
            <Image
              img={images.catsopinionthumb}
              alt="Cats opinion sivuston thumbnail kuva"
            />
          }
        />
        <PortfolioItem
          readContent={ContentSelector.Catquiz}
          key={"a2"}
          headline="Cat Quiz"
          description="Kysele ja vastaa -peli, joka sai inspiraationsa kissoista, oli täydentävä osa Cats Opinion -blogia tarjoten interaktiivista sisältöä ja viihdykettä."
          usedtech={["React", "Firebase", "Python"]}
          containsVideoContent={false}
          thumbnailImage={
            <Image img={images.catquiz} alt="Cats quiz pelin etusivu" />
          }
        />
        <PortfolioItem
          readContent={ContentSelector.Catvision}
          key={"a3"}
          headline="Cat vision"
          description="Unitylla toteutettu web-selainpeli, joka havainnollistaa ihmisen ja kissan näkökyvyn eroja. Se oli osa Cats Opinion -blogin interaktiivista sisältöä."
          usedtech={["Unity", "Firebase"]}
          containsVideoContent={false}
          thumbnailImage={
            <Image
              img={images.catvisiongame}
              alt="Cats vision selain pelin näkymä"
            />
          }
        />
        <PortfolioItem
          readContent={ContentSelector.Footkin}
          key={"a4"}
          headline="Footkin's halloween revolution"
          description="Teimme Unitylla yksinkertaisen Halloween-teemaisen pelin. Osallistuin neljän muun henkilön kanssa nelipäiväiseen pelijamitapahtumaan."
          usedtech={["Unity", "Universal render pipeline", "Gamejam"]}
          containsVideoContent={true}
          thumbnailImage={
            <Image
              img={images.footkin}
              alt="Kuva Footkin's halloween revolution pelin päävalikosta"
            />
          }
        />
        <PortfolioItem
          readContent={ContentSelector.VirtualLib}
          key={"a5"}
          headline="Virtuaalikirjasto"
          description="Teimme koulussa työssäoppimisjakson aikana paikalliselle kirjastolle pelin. Pelissä pelaaja suorittaa possun antamia tehtäviä ja samalla tutustuu kirjaston tarjontaan. Lisäsimme peliin myös toimivia tietokoneita, joilla voi pelata minipelejä."
          usedtech={["Unity"]}
          containsVideoContent={false}
          thumbnailImage={
            <Image img={images.kirjastomenu} alt="Kirjastopelin päävalikko" />
          }
        />
        <PortfolioItem
          readContent={ContentSelector.Raytrace}
          key={"a6"}
          headline="Unity raytracing"
          description="Tehtävänä oli esitellä joko Universal Render Pipeline (URP) -renderöintiä tai High Definition Render Pipeline (HDRP) -renderöintiä. Päätin tehdä HDRP:n avulla linnamaisen kentän, joka hyödyntää Nvidian ray tracing -tekniikkaa ja DLSS-tekniikoita."
          usedtech={["Unity", "HDRP"]}
          containsVideoContent={true}
          thumbnailImage={
            <Image img={images.ray} alt="Kuva pelin päävalikosta" />
          }
        />
      </PageBase>
    </motion.main>
  );
};

export default PortfolioPage;
