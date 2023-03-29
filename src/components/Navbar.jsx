import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { useContext } from "react";

import NavBarMenu from "./NavBarMenu";
import { Image } from "./Image";
import { Context } from "../context/Context";

export const Navbar = () => {
  const { randomUser } = useContext(Context);
  //   console.log(randomUser);
  return (
    <>
      <nav className="flex justify-end items-center space-x-4 text-xs pt-3 pr-5 pl-5">
        <NavBarMenu title={"Gmail"} />
        <NavBarMenu title={"Images"} />
        <NavBarMenu icon={<CgMenuGridO />} styleClass={"text-2xl "} />
        <Image image={randomUser} styleClass={"rounded-full h-8"} />
      </nav>
    </>
  );
};
