import React from "react";
import { NavLink } from "react-router-dom";

export const NavbarItem = ({ title, icon, styleClass }) => {
  return (
    <>
      <NavLink className="flex items-center justify-center space-x-1">
        <div>{icon}</div>
        <div>{title}</div>
      </NavLink>
    </>
  );
};
