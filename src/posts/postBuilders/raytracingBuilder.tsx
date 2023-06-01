import React from "react";
import Post from "../post";
import Image from "../../components/image/image";
import VideoComponent from "../../components/videoComponent";
import image1 from "../../images/thumbnail.webp";
import image2 from "../../images/fireplace.webp";
import image3 from "../../images/hallway.webp";
export const raytrace = (
  <Post
    children={
      <>
        <h1>Unity raytracing, dlss ja DX12</h1>
        <p>
          Tein Unitylla ray tracing ja dlss demo scenen. Mallinsin Blenderillä
          kohtalaisen raskaan scenen jossa oli paljon kiiltäviä pintoja ja
          heijastuksia. Vfx efekteissä en myöskään säästellyt. Screen space
          reflection moodina oli ray traced. Dlss:llä oli selvä vaikutus
          näytönohjaimen suorituskykyyn. Video ja peli on nauhoitettu nvidia rtx
          2060 näytönohjaimella.
        </p>
        <div id="spacer"></div>
        <VideoComponent videoURL="https://www.youtube-nocookie.com/embed/iFBjlztOsMU" />
        <figure>
          <Image alt="Kuva pelin takkahuoneesta" img={image1} />
          <figcaption>Takkahuone</figcaption>
        </figure>
        <h2>Ajatuksia</h2>
        <p>
          Valitettavasti Youtube kompressio pilasi videon kuvanlaadun mutta dlss
          ja dynaamisella resoluutiolla on hurja vaikutus pieniin
          pölypartikkeleihin ja pieniin animaatioihin. Pahimmillaan dlss hävitti
          kokonaan näkyvistä kattokynttilöiden heilunta animaation ja
          pölypartikkelit. Toisaalta dlss ja dynaaminen resoluutio lähes tuplasi
          FPS:än.
        </p>
        <figure>
          <Image alt="Kuva tulisijasta" img={image2} />
          <figcaption>
            Tulisijassa oli monta vfx graphia samaan aikaan. Lisäksi kuvasta voi
            hahmottaa pienen easter egg:in, niitä on aina aikaa laittaa...
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-emoji-wink"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z" />
            </svg>
          </figcaption>
        </figure>
        <figure>
          <Image
            alt="Kuva käytävästä jossa oli partikkeleja ja pieniä animaatioita."
            img={image3}
          />
          <figcaption>
            Käytävässä testasin kuinka dlss vaikuttaa pöly partikkeleita ja
            pieniä animaatioita.
          </figcaption>
        </figure>
      </>
    }
  />
);
