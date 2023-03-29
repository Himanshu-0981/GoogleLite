import React from "react";

export const Button = ({ title, styleClass }) => {
  return (
    <div>
      <button className={styleClass}>{title}</button>
    </div>
  );
};
