import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import image1 from "../../images/kirjastomenu.webp";
import image2 from "../../images/pighost.webp";
import image3 from "../../images/minigame3.webp";
import image4 from "../../images/whole.webp";
export const virtualLibrary = (
  <Post
    children={
      <>
        <h1>Virtuaalikirjasto</h1>
        <p>
          Toteutimme eräälle kaupunginkirjastolle pelin. Peli oli suunnattu
          nuoremmille kuluttajille ja tutustutti heitä kirjastoon. Pelissä
          pystyi tutkimaan kirjaston alueita ja nähtävyyksiä sekä lainaamaan
          kirjoja. Pelaajaa ohjasi lentävä possu, jolta sai tehtäviä
          suoritettavaksi. Suoritettuaan kaikki tehtävät pelaaja saa leimoilla
          koristellun kirjasto passin jonka voi tallentaa kuvana ja vaikka
          tulostaa.
        </p>
        <figure>
          <Image alt="Kuva pelin valikosta" img={image1} />
          <figcaption>Pelin päävalikko</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Peli on toteutettu Unity pelimoottorilla, URP pipeline:lla. Pelissä on
          paljon värikkäitä custom shadereitä ja liikkuvaa materiaalia.
        </p>
        <figure>
          <Image alt="Kuva possu isännästä" img={image2} />
          <figcaption>
            Possu antoi pelaajalle tehtäviä ja ohjeita kirjastossa toimimiseen.
          </figcaption>
        </figure>
        <figure>
          <Image
            alt="Kuva kirjaston tietokoneesta jossa pyörii minipeli"
            img={image3}
          />
          <figcaption>
            Kirjaston pelin sisäisillä tietokoneilla pystyi pelaamaan
            minipelejä.
          </figcaption>
        </figure>
        <figure>
          <Image alt="Yleiskuva pelialueesta" img={image4} />
          <figcaption>Eteisestä laajanäkymä pelialueelle.</figcaption>
        </figure>
      </>
    }
  />
);
