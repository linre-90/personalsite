import React, { ReactElement } from "react";
import PageBase from "../components/pageBase";
import PortfolioItem from "../components/portfolioItem";
import Image from "../components/image/image";
import { images } from "../components/image/imageImports";
import { motion } from "framer-motion";
import { postList } from "../posts/postManager";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  listingContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));

/**
 * Renders portfolio listing and reader
 */
const PortfolioPage = (): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  return (
    <motion.main
      initial={{ opacity: 0, visibility: "hidden", x: -500 }}
      animate={{ opacity: 1, visibility: "visible", x: 0 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBase>
        <h1>Portfolio</h1>
        <p>
          Psssst... "Live" tägillä merkattuja voi kokeilla lataamalla tai
          selaimella. "Video" tägillä olevista löytyy video!{"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-hand-thumbs-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
          </svg>
        </p>
        <div className={classes.listingContainer}>
          <PortfolioItem
            readContent={postList.koivikkolisala}
            headline="Kiinteistö Oy Koivikko-Lisälä"
            description="Selkeät ja yksinkertaiset sivut huoneiston vuokrausta harjoittavalle yritykselle. Sivujen toteutuksessa otettiin huomioon asiakkaan kustannus toiveet sekä halukkuus sivuston omatoimiseen ylläpitoon."
            usedtech={["Hugo", "Firebase", "Golang", "Live"]}
            containsVideoContent={false}
            thumbnailImage={
              <Image
                img={images.koivikkolthumb}
                alt="Koivikko-Lisälä sivujen etusivu"
              />
            }
          />
          <PortfolioItem
            readContent={postList.catsopinion}
            headline="Cat's Opinion"
            description="Cat's opinion oli kissa aiheinen blogi johon kuului myös muuta pelattavaa verkkosisältöä."
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
            readContent={postList.catquiz}
            headline="Cat Quiz"
            description="Catquiz on Reactilla toteutettu, selain pohjainen kysele ja vastaa peli. Peli oli osa Cat's opinion blogin interaktiivista sisältöä."
            usedtech={["React", "Firebase", "Python", "Live"]}
            containsVideoContent={false}
            thumbnailImage={
              <Image img={images.catquiz} alt="Cats quiz pelin etusivu" />
            }
          />
          <PortfolioItem
            readContent={postList.catvision}
            headline="Cat vision"
            description="Unitylla toteutettu web-selainpeli, joka havainnollistaa ihmisen ja kissan näkökyvyn eroja. Cat vision oli osa Cats Opinion -blogin interaktiivista sisältöä."
            usedtech={["Unity", "Firebase", "Live"]}
            containsVideoContent={false}
            thumbnailImage={
              <Image
                img={images.catvisiongame}
                alt="Cats vision selain pelin näkymä"
              />
            }
          />
          <PortfolioItem
            readContent={postList.footkin}
            headline="Footkin's halloween revolution"
            description="Teimme Unitylla yksinkertaisen Halloween-teemaisen pelin. Osallistuin neljän muun henkilön kanssa nelipäiväiseen pelijami tapahtumaan."
            usedtech={[
              "Unity",
              "Universal render pipeline",
              "Gamejam",
              "Live",
              "Video",
            ]}
            containsVideoContent={true}
            thumbnailImage={
              <Image
                img={images.footkin}
                alt="Kuva Footkin's halloween revolution pelin päävalikosta"
              />
            }
          />
          <PortfolioItem
            readContent={postList.virtualLibrary}
            headline="Virtuaalinen kirjasto"
            description="Teimme koulussa työssäoppimisjakson aikana paikalliselle kirjastolle pelin. Pelissä pelaaja suorittaa possun antamia tehtäviä ja samalla tutustuu kirjaston tarjontaan. Lisäsimme peliin myös toimivia tietokoneita, joilla voi pelata minipelejä."
            usedtech={["Unity"]}
            containsVideoContent={false}
            thumbnailImage={
              <Image img={images.kirjastomenu} alt="Kirjastopelin päävalikko" />
            }
          />
          <PortfolioItem
            readContent={postList.raytrace}
            headline="Unity raytracing, dlss ja DX12"
            description="Tein pienimuotoisen toteutuksen unityn HDRP renderöinnillä. Scenessä hyödynnetään ray tracing teknologiaa ja raskasta post prosessointia."
            usedtech={["Unity", "HDRP", "Video"]}
            containsVideoContent={true}
            thumbnailImage={
              <Image img={images.ray} alt="Kuva pelin päävalikosta" />
            }
          />
        </div>
      </PageBase>
    </motion.main>
  );
};

export default PortfolioPage;
