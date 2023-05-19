import React, { ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";
import VideoComponent, { VideoComponentProps } from "./videoComponent";

interface PortfolioItemProps extends VideoComponentProps {
  headline: string;
  description: string;
  usedtech: string[];
  imageCollection?: JSX.Element[];
  link?: string;
  downloadLink?: string;
}

const PortfolioItem = (item: PortfolioItemProps): ReactElement => {
  return (
    <div>
      <h3>{item.headline}</h3>
      <div>
        {item.usedtech.map((i) => (
          <span className="tech-pill" key={uuidv4()}>
            {i}
          </span>
        ))}
      </div>
      <p>{item.description}</p>
      {item.link !== undefined && <a href={item.link}>Linkki sivuille.</a>}
      {item.downloadLink !== undefined && (
        <a href={item.downloadLink} download={true}>
          Lataa.
        </a>
      )}
      {item.videoURL !== undefined && (
        <VideoComponent
          videoURL={item.videoURL}
          videoCookiesOk={item.videoCookiesOk}
          acceptFunction={item.acceptFunction}
        />
      )}
      <div className="image-container">
        {item.imageCollection !== undefined &&
          item.imageCollection.map((image) => (
            <div key={uuidv4()}>{image}</div>
          ))}
      </div>

      <hr className="portfolio-item-hr"></hr>
    </div>
  );
};

export default PortfolioItem;
