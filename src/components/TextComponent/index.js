import React from "react";

import { TextContent } from "./style";

const TextComponent = ({title, text}) => {
  return (
    <TextContent>
      <p className="title">{title}</p>
      <p>{text}</p>
    </TextContent>
  );
};

export default TextComponent;
