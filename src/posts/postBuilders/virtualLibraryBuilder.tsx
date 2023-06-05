import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import { images } from "../../components/image/imageImports";

export const virtualLibrary = (
  <Post
    children={
      <>
        <h1>Virtuaalinen kirjasto</h1>
        <p>
          Toteutimme eräälle kaupunginkirjastolle pelin. Peli oli suunnattu
          nuoremmille kuluttajille ja tutustutti heitä kirjastoon. Pelissä
          pystyi tutkimaan kirjaston osastoja ja nähtävyyksiä sekä lainaamaan
          kirjoja. Pelaajaa ohjasi lentävä possu, jolta sai tehtäviä
          suoritettavaksi. Suoritettuaan kaikki tehtävät pelaaja saa leimoilla
          koristellun kirjasto passin jonka voi tallentaa kuvana ja vaikka
          tulostaa.
        </p>
        <figure>
          <Image alt="Kuva pelin valikosta" img={images.kirjastomenu} />
          <figcaption>Pelin päävalikko</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Peli on toteutettu Unity pelimoottorilla, URP pipeline:lla. Pelissä on
          paljon värikkäitä custom shadereitä ja liikkuvaa materiaalia.
        </p>
        <figure>
          <Image alt="Kuva possu isännästä" img={images.kirjastopig} />
          <figcaption>
            Possu antoi pelaajalle tehtäviä ja ohjeita kirjastossa toimimiseen.
          </figcaption>
        </figure>
        <figure>
          <Image
            alt="Kuva kirjaston tietokoneesta jossa pyörii minipeli"
            img={images.kirjastominigame}
          />
          <figcaption>
            Kirjaston pelin sisäisillä tietokoneilla pystyi pelaamaan
            minipelejä.
          </figcaption>
        </figure>
        <figure>
          <Image alt="Yleiskuva pelialueesta" img={images.kirjastowhole} />
          <figcaption>Eteisestä laajanäkymä pelialueelle.</figcaption>
        </figure>
      </>
    }
  />
);
