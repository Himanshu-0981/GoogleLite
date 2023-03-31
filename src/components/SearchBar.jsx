import { IoMdSearch, IoMdClose } from "react-icons/io";

import logoMic from "../assets/logo-mic.svg";
import logoCamera from "../assets/logo-camera.svg";

export const SearchBar = ({
  placeholder,
  styleClass,
  onChangeAction,
  onClickAction,
  value,
  onKeyUpAction,
}) => {
  return (
    <>
      <div className="relative ">
        <input
          type="text"
          className={styleClass}
          placeholder={placeholder}
          autoFocus
          onChange={onChangeAction}
          onKeyUp={onKeyUpAction}
          value={value}
        />
        <div>
          <IoMdSearch
            className="absolute left-3 top-3 text-[#8e9499]"
            size={20}
          />
          {value ? (
            <IoMdClose
              className="absolute right-24 top-3 text-[#8e9499]"
              size={20}
              onClick={onClickAction}
            />
          ) : (
            ""
          )}
          <img src={logoMic} className="absolute right-14 top-2.5 h-7" />
          <img src={logoCamera} className="absolute right-3 top-2.5 h-6" />
        </div>
      </div>
    </>
  );
};
