import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import VideoComponent from "../../components/videoComponent";
import image1 from "../../images/menu.webp";
import image2 from "../../images/lightDark.webp";
import file from "../../downloads/FootkinsHalloweenRevolution.zip";
export const footkin = (
  <Post
    children={
      <>
        <h1>Footkin's halloween revolution</h1>
        <p>
          Osallistuimme kolmen muun opiskelijan kanssa 4 päivää kestävään game
          jam tapahtumaan. Jamien aiheena oli tuottaa halloween teemainen peli.
          Pelin pelattavana hahmona on variksen pelätin, joka menetti kurpitsa
          päänsä jalkapallon lentäessä siihen. Hahmo laittoi pääkseen vahingossa
          jalkapallon ja huomasi että tämähän toimii yhtä hyvin. Suivaantuneena
          variksenpelätin akatemian valheesta, että vain kurpitsa toimii päänä,
          hän päätti lähteä kosto retkelle.
        </p>
        <a download={true} href={file}>
          Pelin buildin voi ladata tästä!
        </a>
        <div id="spacer"></div>
        <VideoComponent videoURL="https://www.youtube-nocookie.com/embed/AZPaT0EHMCY" />
        <figure>
          <Image alt="Kuva pelin päävalikosta" img={image1} />
          <figcaption>Pelin päävalikko</figcaption>
        </figure>
        <h2>Tekninen toteutus</h2>
        <p>
          Peli on toteutettu Unity pelimoottorilla, URP renderöinti pipelinella.
          Olin pääasiallisesti vastuussa koodaamisesta mutta jaoimme työtä myös
          muiden jäsenten kesken vahvuuksien perusteella. Rajoitteelliseen
          aikaan nähden pelistä tuli yllättävän hyvä.
        </p>
        <figure>
          <Image alt="Kuva jossa catquiz peli on käynnissä" img={image2} />
          <figcaption>
            Mallintajamme teki loistavaa työtä 3d mallien kanssa ja visuaalinen
            ilme on mielestäni todella onnisunut.
          </figcaption>
        </figure>
      </>
    }
  />
);
