import React from "react";

import { ImageContent } from "./style";

const ImageComponent = ({altText, imageLink}) => {
  return( 
  <>
    <ImageContent src={`${imageLink}`} alt={altText} />
  </>)
}

export default ImageComponent;
