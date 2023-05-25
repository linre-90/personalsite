import React, { ReactElement } from "react";
import { ImageProps } from "../../types";
/**
 * Image rendering component
 * @param param0
 * @returns
 */
const Image = ({ img, alt }: ImageProps): ReactElement => {
  return <img src={img} alt={alt} />;
};

export default Image;
