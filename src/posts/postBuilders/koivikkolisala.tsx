import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import { images } from "../../components/image/imageImports";

export const koivikkolisala = (
  <Post
    children={
      <>
        <h1>Kiinteistö Oy Koivikko-Lisälä</h1>
        <p>
          Pää kriteerit sivuille olivat toimintavarmuus, helppous ja
          yksinkertaisuus. Näiden takia päädyttiin käyttämään staattista
          perinteistä verkkosivustoa. Sisältöä ei myöskään tarvitse jatkuvasti
          päivittää mikä puolsi Hugon ja perinteisten web teknologioiden
          käyttöä. Sivustojen nopeuteen ja käyttäjäystävällisyyteen päätettiin
          myös panostaa.
        </p>
        <p>
          Sivut voi katsoa tästä:{" "}
          <a href="https://topeeka28asunnot.fi">topeeka28asunnot.fi</a>
        </p>
        <figure>
          <Image alt="Kuva etusivulta" img={images.koivikkolthumb} />
          <figcaption>Kuva etusivulta.</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Sivustoille tehtiin oma teema Hugolla. Itse sisältö on kirjoitettu
          markdownia ja Hugon teeman parametreja hyödyntäen. Hugo on hyvin
          samankaltainen esimerkiksi Wordpressin perinteisten teemojen kanssa.
          Hugolla on oma hierarkia millä etsitään sopivaa templatea projektin
          kansioista. Verkkosivu buildataan html, css ja javascriptiksi ja
          voidaan näin suorittaa staattisessa hosting ympäristössä vähentäen
          kustannuksia merkittävästi.
        </p>
        <p>
          Vaikka tällä hetkellä ei ole tarvetta sisällön jatkuvaan
          päivittämiseen, sivusto on kohtalaisen yksinkertainen siirtää vaikkapa
          Wordpressiin, koska sisältö ja esitys ovat eriytetty toisistaan.
        </p>
        <figure>
          <Image alt="Kuva yksiöiden listauksesta" img={images.koivikkolsec} />
          <figcaption>Kuva yksiöiden listauksesta.</figcaption>
        </figure>
      </>
    }
  />
);
