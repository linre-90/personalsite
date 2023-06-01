import React, { ReactElement } from "react";
import { v4 as uuidv4 } from "uuid";
import { PortfolioItemProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";
import Viewpf from "./viewpf";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  dividerStyle: {
    border: `1px solid ${theme.complimentaryColor}`,
    width: "40%",
    marginLeft: 0,
    marginTop: 40,
  },
  techPill: {
    border: "1px solid " + theme.complimentaryColor,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    color: theme.complimentaryColor,
    fontSize: ".75rem",
  },
  techPilWrapper: {
    border: `1px solid ${theme.complimentaryColor}`,
    borderBottom: 0,
    borderLeft: 0,
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
  },
  flexImageGridContainer: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
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
 * Renders single portfolio item preview
 * @param item
 * @returns
 */
const PortfolioItem = ({
  description,
  headline,
  readContent,
  thumbnailImage,
  usedtech,
  containsVideoContent,
}: PortfolioItemProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });

  return (
    <div className={classes.itemWrapper}>
      <h3>{headline}</h3>
      <div className={classes.techPilWrapper}>
        {usedtech.map((i) => (
          <div className={classes.techPill} key={uuidv4()}>
            {i}
          </div>
        ))}
      </div>
      <p>{description}</p>
      <div className={classes.flexImageGridContainer}>
        <div className={classes.flexImageContainer} key={uuidv4()}>
          {thumbnailImage}
        </div>
      </div>
      <Viewpf
        containsVideoContent={containsVideoContent}
        content={readContent}
      />
      <hr className={classes.dividerStyle}></hr>
    </div>
  );
};

export default PortfolioItem;
