import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import image1 from "../../images/catsopinion-thumbnail.webp";
import image2 from "../../images/catsopinion-blog.webp";
export const catsopinion = (
  <Post
    children={
      <>
        <h1>Catsopinion</h1>
        <p>
          Catsopinion oli kissa aiheinen blogi. Blogissa käsiteltiin kissojen
          anatomiaa, biologiaa ja kaikkea muutakin lajiin liittyvää. Blogin
          pitäminen on jo nyt loppunut, koska aikaa ei riittänyt sisällön
          tuottamiseen. Blogi oli kaksikielinen ja sitä pidettiin suomeksi ja
          englanniksi. Sisällön tuottamista valvoi oma kissani, joka oli kyllä
          alussa innostunut mutta kiinnostus kuitenkin hänellä lopahti nopeasti.
        </p>
        <figure>
          <Image alt="Kuva blogin etusivulta" img={image1} />
          <figcaption>Kuva etusivulta.</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Teknisesti blogi toteutettiin Nuxt, AWS, Heroku ja Firestore
          stackillä. Etusivu renderöitiin serverillä ja sen jälkeen sivun
          toiminta siirtyi selaimella suoritettavalle javascriptille.
          Catsopini:lle oli myös C# kirjoitettu yksinkertainen työpöytäsovellus
          sisällön hallintaan. Sovelluksella pystyi lähettämään blogiin uusia
          kirjoituksia ja päättämään, koska se näkyy käyttäjille. Tämähän nyt
          olisi ilman muuta ollut oivallinen Wordpress projekti mutta tekemällä
          asian näin sain arvokasta teitoutatta ja opin monia asioita lisää.
        </p>
        <figure>
          <Image alt="Kuva blogi kirjoitusten listauksesta" img={image2} />
          <figcaption>Kuva blogi listauksesta.</figcaption>
        </figure>
      </>
    }
  />
);
