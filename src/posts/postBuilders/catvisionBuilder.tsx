import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import image1 from "../../images/catvision-thumbnail.webp";
import image2 from "../../images/catvision-difference.webp";
export const catvision = (
  <Post
    children={
      <>
        <h1>Cat vision</h1>
        <p>
          Cat vision oli interakiitivinen lisäys catsopinion blogin tarjontaan.
          Pelissä voi ihmetellä kissan elämää sekä vertailla eroja kissan ja
          ihmisen näkökyvyn välillä.
        </p>
        <p>
          <a href="https://catvision-68afa.web.app/">
            Peliä voi käydä pelaamassa täällä!
          </a>
        </p>
        <figure>
          <Image alt="Kuva pelialueesta" img={image1} />
          <figcaption>Yleiskuva pelialueesta</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Peli on toteutettu Unity pelimoottorilla, WEBGL buildina ja se on
          hostattu Googlen Firebase palvelussa. Peli on tehty valmiilla assetti
          paketilla johon valitsin tarkoituksella värikkään sekä yksinkertaisen
          taiteellisen tyylisuunnan.
        </p>
        <figure>
          <Image alt="Kuva jossa catquiz peli on käynnissä" img={image2} />
          <figcaption>
            Peli simuloi eroja näkökykyjen välillä hyödyntäen post
            prosessointia.
          </figcaption>
        </figure>
      </>
    }
  />
);
