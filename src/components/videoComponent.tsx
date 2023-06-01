import React, { ReactElement } from "react";
import { VideoComponentProps } from "../types";
import { createUseStyles, useTheme } from "react-jss";
import { Dark, Light } from "../theme";

const useStyles = createUseStyles((theme: Dark | Light) => ({
  videoFrame: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    paddingTop: "56.25%",
    marginBottom: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 0,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
}));

/**
 * Renders embedded youtube video components with correct sizes.
 * @param param0
 * @returns
 */
const VideoComponent = ({ videoURL }: VideoComponentProps): ReactElement => {
  const theme = useTheme<Dark | Light>();
  const classes = useStyles({ theme });
  return (
    <div className={classes.videoFrame}>
      <iframe
        className={classes.video}
        src={videoURL}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
