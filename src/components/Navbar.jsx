import { NavbarItem } from "./NavbarItem";
import { IoMdSearch, IoMdMore } from "react-icons/io";
import { BiImage, BiNews, BiMap } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { Button } from "./Button";
import { navLinkStyles } from "./NavLinkStyles";

export const Navbar = () => {
  return (
    <div className="flex space-x-40 text-sm mt-7 ml-48 text-[#474a4d]">
      <div className="flex space-x-5">
        <NavbarItem
          icon={<IoMdSearch size={17} />}
          title={"All"}
          styleClass={navLinkStyles}
        />
        <NavbarItem icon={<BiImage size={17} />} title={"Images"} />
        <NavbarItem icon={<BiNews size={17} />} title={"News"} />
        <NavbarItem icon={<RiVideoLine size={17} />} title={"Videos"} />
        <NavbarItem icon={<BiMap size={17} />} title={"Maps"} />
        <NavbarItem icon={<IoMdMore size={17} />} title={"More"} />
      </div>
      <div>
        <Button title={"Tools"} />
      </div>
    </div>
  );
};
