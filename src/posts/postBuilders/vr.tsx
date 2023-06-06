import React from "react";
import Post from "../post";
import VideoComponent from "../../components/videoComponent";

export const vr = (
  <Post
    children={
      <>
        <h1>KekwVR</h1>
        <p>
          KekwVR eli Kauhena Edistynyt Koulusimulaattori - World of Virtual.
          Humorisesta nimestään huolimatta peli on ihan oikea asiakkaan
          tilaustyö. Toteutimme projektin neljän hengen porukalla. Kenelläkään
          ei ollut VR pelien tekemisestä minkäänlaista aikaisempaa kokemusta
          mutta Unityn ja blenderin käytöstä kyllä. Peli toimii hyvänä ja
          dokumentoituna pohjana tuleville vuosiluokille, jotka voivat laajentaa
          ja lisätä esimerkiksi eri koulutusaloja peliin. Projekti on
          versiohallinnoitu GIT:illä ja kommitteja kertyi loppujen lopuksi
          reilusti yli 1000 kappaletta.
        </p>
        <p>
          Peli pyörii PC:llä tai natiivisti Oculus quest 2 laitteella Android
          buildina. Suorituskyky oli eräs suurimpia teknisiä ongelmia
          projektissa. Peliin on jouduttu tekemään monille asioille LOD,
          occulusion ja rajoittamaan objektien piirtoetäisyyksiä. Tekstuureita
          on atlassoitu yhteen ja pelissä uudelleen käytetään paljon objekteja
          nimeenomaan poolausta hyödyntäen. Shadereita projektissa optimoitiin
          myös.
        </p>
        <p>
          Aikaa projektiin käytettiin noin 10 viikkoa. Hiomista ja hienosäätöä
          jäi vielä huomattavasti tekemättä. Ääniä, äänien 3d ja niiden
          häivytyksiä jäi hiomatta ajan puutteen vuoksi. Lisäksi nyt, kun
          projekti on "valmis" sanoisin, että en lähtisi tekemään enään samoilla
          tekstuureilla uudestaan vaan yksinkertaistaisin ilmettä huomattavasti.
          Gitin unohtaisin myös aivan totaalisesti ja käyttäisin joko Perforcea
          tai Apachen Subversionia.
        </p>
        <div id="spacer"></div>
        <VideoComponent videoURL="https://www.youtube-nocookie.com/embed/xm9viDpLztc" />
      </>
    }
  />
);
