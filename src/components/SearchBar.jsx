import { IoMdMic, IoMdSearch } from "react-icons/io";
import { BiCamera } from "react-icons/bi";

export const SearchBar = ({ placeholder, styleClass }) => {
  return (
    <>
      <div className="relative ">
        <input type="text" className={styleClass} placeholder={placeholder} />
        <div>
          <IoMdMic
            className="absolute right-14 top-3 text-[#8e9499]"
            size={25}
          />
          <BiCamera
            className="absolute right-3 top-3 text-[#8e9499] "
            size={25}
          />
          <IoMdSearch
            className="absolute left-3 top-4 text-[#8e9499]"
            size={20}
          />
        </div>
      </div>
    </>
  );
};
