import React from "react";
import { CgMenuGridO } from "react-icons/cg";

import { Button } from "./Button";
import { HeaderText } from "./HeaderText";
import HeaderMenu from "./HeaderMenu";

export const Header = () => {
  return (
    <>
      <nav className="flex justify-end items-center space-x-4 text-xs pt-3 pr-5 pl-5">
        <HeaderText title1={"Gmail"} />
        <HeaderText title1={"Images"} />
        <HeaderMenu
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
