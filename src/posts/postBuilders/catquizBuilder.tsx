import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import { images } from "../../components/image/imageImports";

export const catquiz = (
  <Post
    children={
      <>
        <h1>Catquiz</h1>
        <p>
          Catquiz oli interakiitivinen lisäys catsopinion blogin tarjontaan.
        </p>
        <p>
          <a href="https://catquiz-843f1.web.app/">
            Peliä voi käydä kokeilemassa täällä!
          </a>
        </p>
        <figure>
          <Image alt="Kuva pelin etusivulta." img={images.catquiz} />
          <figcaption>Kuva etusivulta.</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Kysymykset oli tallennettu Firebasen Realtime database tietokantaan.
          Kaikki kysymykset kirjoitettiin exceliin suomeksi ja englanniksi.
          Tämän jälkeen excelistä vietiin CSV tiedosto ulos, joka luettiin{" "}
          <a href="https://github.com/linre-90/catquiz-db-fill">
            python scriptillä
          </a>{" "}
          ja siirrettiin tietokantaan. Frontendin kirjoitin Reactilla ja
          Typescriptillä.{" "}
          <a href="https://github.com/linre-90/catquiz">
            Github repo on täällä.
          </a>{" "}
          Kaikki css oli myös käsin kirjoitettua. Tämä taisi olla ensimmäinen
          typescript projektini, joten pyydän armoa koodin sotkuisuuteen.
        </p>
        <figure>
          <Image
            alt="Kuva jossa catquiz peli on käynnissä"
            img={images.catquizgame}
          />
          <figcaption>
            Pelissä kyseltiin vastauksia kissa aiheisiin kysymyksiin.
          </figcaption>
        </figure>
        <figure>
          <Image alt="Kuva pelin palaute osiosta" img={images.catquizend} />
          <figcaption>
            Pelistä sai aina lopuksi palautteen mikä meni väärin ja mikä oikein.
          </figcaption>
        </figure>
      </>
    }
  />
);
