import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { useContext } from "react";

import NavBarMenu from "./NavBarMenu";
import { Image } from "./Image";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-end items-center space-x-4 text-xs pt-3 pr-5 pl-5">
        <NavBarMenu title={"Gmail"} />
        <NavBarMenu title={"Images"} />
        <NavBarMenu
          icon={<CgMenuGridO />}
          styleClass={"text-2xl text-[#72767a] "}
        />
        <Button
          title={"Sign in"}
          styleClass={
            "pt-2 pb-2 pr-4 pl-4 bg-[#4285f4] rounded text-white text-sm"
          }
        />
      </nav>
    </>
  );
};
