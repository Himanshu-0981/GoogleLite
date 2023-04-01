import React from "react";

export const Image = ({ image, styleClass }) => {
  return <img src={image} alt="image" className={styleClass} />;
};
