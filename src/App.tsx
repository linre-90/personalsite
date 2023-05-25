import React, { useRef, useState } from "react";
import "./style.css";
import Headline from "./components/headline";
import Nav from "./components/nav";
import BacktoTopButton from "./components/backToTop";
import PortfolioItem from "./components/portfolioItem";
import VideoComponent from "./components/videoComponent";
import { Routes, Route, Link } from "react-router-dom";

// Image imports
import catsopinionblog from "./images/catsopinion-blog.webp";
import catsopinionthumb from "./images/catsopinion-thumbnail.webp";
import catquiz from "./images/catquiz-index.webp";
import catquizgame from "./images/catquiz-gameplay.webp";
import catquizend from "./images/catquiz-end.webp";
import catvisiongame from "./images/catvision-thumbnail.webp";
import catvisionDifference from "./images/catvision-difference.webp";
import footkin from "./images/menu.webp";
import footkinLight from "./images/lightDark.webp";
import kirjastomenu from "./images/kirjastomenu.webp";
import kirjastopig from "./images/pighost.webp";
import kirjastominigame from "./images/minigame3.webp";
import kirjastowhole from "./images/whole.webp";
import ray from "./images/thumbnail.webp";
import rayhall from "./images/hallway.webp";
import rayfireplace from "./images/fireplace.webp";
import HomePage from "./Pages/home";

function App() {
  const infoRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [videoCookie, setVideoCookie] = useState<boolean>(false);

  const acceptGoogleCookies = (): void => setVideoCookie(true);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              videoCookie={videoCookie}
              videoCookieAcceptFn={acceptGoogleCookies}
            />
          }
        ></Route>
        <Route path="/portfolio"></Route>
        <Route path="/yhteys"></Route>
        <Route path="*"></Route>
      </Routes>
      <div className="container">
        <hr></hr>
        <div id="portfolio" ref={portfolioRef}></div>
        <h2>Portfolio</h2>
        <PortfolioItem
          key={"a1"}
          headline="Cats Opinion"
          description="Blogi, jonka aiheena olivat kissat ja niiden salamyhkäinen elämä, oli saatavilla sekä englanniksi että suomeksi, mutta päätimme lopettaa bloggaamisen, koska se vei liikaa aikaa muilta projekteilta."
          usedtech={["Nuxt.js", "Heroku", "Firestore", "AWS"]}
          imageCollection={[
            <img
              src={catsopinionthumb}
              alt="Cats opinion sivuston thumbnail kuva"
            />,
            <img
              src={catsopinionblog}
              alt="Cats opinion sivun blogi listauksesta"
            />,
          ]}
        />
        <PortfolioItem
          key={"a2"}
          headline="Cat Quiz"
          description="Kysele ja vastaa -peli, joka sai inspiraationsa kissoista, oli täydentävä osa Cats Opinion -blogia tarjoten interaktiivista sisältöä ja viihdykettä."
          usedtech={["React", "Firebase", "Python"]}
          imageCollection={[
            <img src={catquiz} alt="Cats quiz pelin etusivu" />,
            <img
              src={catquizgame}
              alt="Cat quiz pelin pelin aikainen näkymä"
            />,
            <img
              src={catquizend}
              alt="Cat quiz pelin jälkeinen palaute näkymä"
            />,
          ]}
          link="https://catquiz-843f1.web.app/"
        />
        <PortfolioItem
          key={"a3"}
          headline="Cat vision"
          description="Unitylla toteutettu web-selainpeli, joka havainnollistaa ihmisen ja kissan näkökyvyn eroja. Se oli osa Cats Opinion -blogin interaktiivista sisältöä."
          usedtech={["Unity", "Firebase"]}
          imageCollection={[
            <img src={catvisiongame} alt="Cats vision selain pelin näkymä" />,
            <img
              src={catvisionDifference}
              alt="Cat vision pelin kuva jossa näkyy eroavaisuuksia näkökyvyssä."
            />,
          ]}
          link="https://catvision-68afa.web.app/"
        />
        <PortfolioItem
          key={"a4"}
          headline="Footkin's halloween revolution"
          description="Teimme Unitylla yksinkertaisen Halloween-teemaisen pelin. Osallistuin neljän muun henkilön kanssa nelipäiväiseen pelijamitapahtumaan."
          usedtech={["Unity", "Universal render pipeline", "Gamejam"]}
          imageCollection={[
            <img src={footkin} alt="Kuva pelin päävalikosta" />,
            <img src={footkinLight} alt="Kuva pelistä" />,
          ]}
          downloadLink="/downloads/FootkinsHalloweenRevolution.zip"
          videoURL="https://www.youtube-nocookie.com/embed/AZPaT0EHMCY"
          videoCookiesOk={videoCookie}
          acceptFunction={acceptGoogleCookies}
        />
        <PortfolioItem
          key={"a5"}
          headline="Virtuaalikirjasto"
          description="Teimme koulussa työssäoppimisjakson aikana paikalliselle kirjastolle pelin. Pelissä pelaaja suorittaa possun antamia tehtäviä ja samalla tutustuu kirjaston tarjontaan. Lisäsimme peliin myös toimivia tietokoneita, joilla voi pelata minipelejä."
          usedtech={["Unity"]}
          imageCollection={[
            <img src={kirjastomenu} alt="Kirjastopelin päävalikko" />,
            <img src={kirjastominigame} alt="Kirjastopelin minipeli" />,
            <img src={kirjastopig} alt="Kirjaston peliä ohjaava possu hahmo" />,
            <img src={kirjastowhole} alt="Kokonaiskuva kirjastosta" />,
          ]}
        />
        <PortfolioItem
          key={"a6"}
          headline="Unity raytracing"
          description="Tehtävänä oli esitellä joko Universal Render Pipeline (URP) -renderöintiä tai High Definition Render Pipeline (HDRP) -renderöintiä. Päätin tehdä HDRP:n avulla linnamaisen kentän, joka hyödyntää Nvidian ray tracing -tekniikkaa ja DLSS-tekniikoita."
          usedtech={["Unity", "HDRP"]}
          imageCollection={[
            <img src={ray} alt="Kuva pelin päävalikosta" />,
            <img src={rayfireplace} alt="Kuva pelistä" />,
            <img src={rayhall} alt="Kuva pelistä" />,
          ]}
          videoURL="https://www.youtube-nocookie.com/embed/iFBjlztOsMU"
          videoCookiesOk={videoCookie}
          acceptFunction={acceptGoogleCookies}
        />
        <hr></hr>
        <div id="contact" ref={contactRef}></div>
        <h2>Yhteydenotto</h2>
        <p>Tavoitat minut parhaiten sähköpostilla.</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope-at icon"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
          </svg>
          jlportfolio@outlook.com
        </p>
        <a href="mailto:jlportfolio@outlook.com">Lähetä viesti.</a>
        <p>Sosiallinen media</p>
        <ul>
          <li>
            <a href="https://twitter.com/90_linre">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter icon"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/linre-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juho-l-171a98233/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
