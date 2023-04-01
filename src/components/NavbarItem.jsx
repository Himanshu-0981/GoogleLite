import React from "react";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({
  address,
  title,
  icon,
  styleClass,
  onclickAction,
}) => {
  return (
    <>
      <NavLink
        to={address}
        onClick={onclickAction}
        className={`flex items-center justify-center space-x-0.5 ${styleClass}`}
      >
        <div className={styleClass}>{icon}</div>
        <div className={styleClass}>{title}</div>
      </NavLink>
    </>
  );
};
