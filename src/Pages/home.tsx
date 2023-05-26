import React, { ReactElement } from "react";
import Headline from "../components/headline";
import VideoComponent from "../components/videoComponent";
import PageBase from "../components/pageBase";
import { HomePageProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import { motion } from "framer-motion";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  headerColor: {
    color: theme.highlightColor,
  },
}));

/**
 * Renders home page layout
 */
const HomePage = ({
  videoURL,
  videoCookiesOk,
  acceptFunction,
}: HomePageProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  return (
    <motion.main
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBase>
        <Headline></Headline>
        <div>
          <h2 className={classes.headerColor}>Info</h2>
          <p>
            Olen Juho, tuleva ohjelmistokehittäjäsi. Koulutukseltani olen
            ohjelmistokehittäjä, joka on erikoistunut pelialaan. Lisäksi olen
            tutustunut web-kehityksen ja mobiililaitteiden maailmaan koulutuksen
            kautta.
          </p>
          <p>
            Pärjään tällä hetkellä useiden eri tekniikoiden kanssa, mukaan
            lukien WordPress, React, Java ja C#. Suurimmat kiinnostuksen
            kohteeni ovat full stack web-kehitys ja pelien tekeminen.
            Mobiilisovellukset ovat myös mielenkiintoisia, ja olen tehnyt
            muutaman Android-järjestelmälle.
          </p>
          <p>
            Olen valmistunut vuonna 2023 pelialan koulutusohjelmasta. Olen
            hankkinut lisäkoulutusta Helsingin yliopistosta ja XAMK
            ammattikorkeakoulusta. Olen kuitenkin harrastanut ohjelmointia jo
            ennen koulutukseen hakeutumista, joten minulla on vähintään 5 vuoden
            kokemus harrastukseni kautta.
          </p>
          <p>
            <i>
              Alta löydät video CV:ni, jolla kerron tarkemmin koulutuksestani ja
              muista kiinnostuksen aiheistani. Mikäli olet herkkä välkkyville
              valoille suosittelen kelaamaan 50 sekunnin kohdalle.
            </i>
          </p>
          <VideoComponent
            videoURL="https://www.youtube-nocookie.com/embed/1d8ALlXSVBY"
            videoCookiesOk={videoCookiesOk}
            acceptFunction={acceptFunction}
          />
        </div>
      </PageBase>
    </motion.main>
  );
};

export default HomePage;
