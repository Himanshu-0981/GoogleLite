import React from "react";

export const Image = ({ image, styleClass }) => {
  return (
    <div>
      <img src={image} alt="image" className={styleClass} />
    </div>
  );
};
