import React, { ReactElement } from "react";
import Headline from "../components/headline";
import "../style.css";
import VideoComponent from "../components/videoComponent";
import PageBase from "../components/pageBase";

interface HomePageProps {
  videoCookie: boolean;
  videoCookieAcceptFn: Function;
}

/**
 * Renders home page layout
 */
const HomePage = ({
  videoCookie,
  videoCookieAcceptFn,
}: HomePageProps): ReactElement => {
  return (
    <PageBase>
      <Headline></Headline>
      <div className="content">
        <h2>Info</h2>
        <p>
          Olen Juho, tuleva ohjelmistokehittäjäsi. Koulutukseltani olen
          ohjelmistokehittäjä, joka on erikoistunut pelialaan. Lisäksi olen
          tutustunut web-kehityksen ja mobiililaitteiden maailmaan koulutuksen
          kautta.
        </p>
        <p>
          Pärjään tällä hetkellä useiden eri tekniikoiden kanssa, mukaan lukien
          WordPress, React, Java ja C#. Suurimmat kiinnostuksen kohteeni ovat
          full stack web-kehitys ja pelien tekeminen. Mobiilisovellukset ovat
          myös mielenkiintoisia, ja olen tehnyt muutaman Android-järjestelmälle.
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
          videoCookiesOk={videoCookie}
          acceptFunction={videoCookieAcceptFn}
        />
      </div>
    </PageBase>
  );
};

export default HomePage;
