import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import { images } from "../../components/image/imageImports";

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
          <Image alt="Kuva pelialueesta" img={images.catvisiongame} />
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
          <Image
            alt="Kuva jossa näkyy ero kissan ja ihmisen näkökyvyssä."
            img={images.catvisionDifference}
          />
          <figcaption>
            Peli simuloi eroja näkökykyjen välillä hyödyntäen post
            prosessointia.
          </figcaption>
        </figure>
      </>
    }
  />
);
