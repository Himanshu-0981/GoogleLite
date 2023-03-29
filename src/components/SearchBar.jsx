import { IoMdMic, IoMdSearch } from "react-icons/io";
import { BiCamera } from "react-icons/bi";
import logoMic from "../assets/logo-mic.svg";
import logoCamera from "../assets/logo-camera.svg";

export const SearchBar = ({ placeholder, styleClass }) => {
  return (
    <>
      <div className="relative ">
        <input
          type="text"
          className={styleClass}
          placeholder={placeholder}
          autoFocus
        />
        <div>
          <IoMdSearch
            className="absolute left-3 top-4 text-[#8e9499]"
            size={20}
          />
          <img src={logoMic} className="absolute right-14 top-3 h-7" />
          <img src={logoCamera} className="absolute right-3 top-3 h-6" />
        </div>
      </div>
    </>
  );
};
