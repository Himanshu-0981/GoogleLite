import { NavbarItem } from "./NavbarItem";
import { IoMdSearch, IoMdMore } from "react-icons/io";
import { BiImage, BiNews, BiMap } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { navLinkStyles } from "./NavLinkStyles";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../context/Context";

export const Navbar = () => {
  const { query } = useContext(Context);

  // const navigate = () => {

  // }

  return (
    <div className="flex justify-between text-sm mt-5 text-[#474a4d] space-x-10 pr-20 pl-20 sm:pr-32 sm:pl-32 lg:pr-52 lg:pl-52">
      <div className="flex space-x-5">
        <NavbarItem
          address={`/result/${query}`}
          icon={<IoMdSearch size={17} />}
          title={"All"}
          styleClass={navLinkStyles}
        />
        <NavbarItem
          address={`/result/${query}`}
          styleClass={"text-xm "}
          icon={<BiImage size={17} />}
          title={"Images"}
        />
        <NavbarItem
          styleClass={"text-xm sm:text-sm"}
          icon={<BiNews size={17} />}
          title={"News"}
        />
        <NavbarItem
          styleClass={"text-xm hidden sm:text-sm sm:flex "}
          icon={<RiVideoLine size={17} />}
          title={"Videos"}
        />
        <NavbarItem
          styleClass={"text-xm  hidden sm:text-sm sm:flex"}
          icon={<BiMap size={17} />}
          title={"Maps"}
        />
        <NavbarItem
          styleClass={"text-xm sm:text-sm"}
          icon={<IoMdMore size={17} />}
          title={"More"}
        />
      </div>
    </div>
  );
};
