import React, { ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";
import VideoComponent from "./videoComponent";
import { PortfolioItemProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  dividerStyle: { width: "40%", marginLeft: 0, marginTop: 40 },
  techPill: {
    border: "1px solid " + theme.highlightColor,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    color: theme.highlightColor,
    fontSize: ".75rem",
  },
  flexImageGridContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  flexImageContainer: {
    flexBasis: 350,
    "& img": {
      width: "100%",
      height: "auto",
      borderRadius: 5,
    },
  },
  itemWrapper: {
    marginTop: 80,
    marginBottom: 80,
  },
}));

/**
 * Renders single portfolio item
 * @param item
 * @returns
 */
const PortfolioItem = (item: PortfolioItemProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.itemWrapper}>
      <h3>{item.headline}</h3>
      <div>
        {item.usedtech.map((i) => (
          <span className={classes.techPill} key={uuidv4()}>
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
      <div className={classes.flexImageGridContainer}>
        {item.imageCollection !== undefined &&
          item.imageCollection.map((image) => (
            <div className={classes.flexImageContainer} key={uuidv4()}>
              {image}
            </div>
          ))}
      </div>
      <hr className={classes.dividerStyle}></hr>
    </div>
  );
};

export default PortfolioItem;
