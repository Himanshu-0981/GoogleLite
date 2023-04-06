import React, { useContext, useRef, useEffect } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Context } from "../context/Context";
import HeaderMenu from "../components/HeaderMenu";
import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";
import googleLogoMini from "../assets/logo-google-mini.svg";

const ResultPageHeader = () => {
  const { query, setQuery } = useContext(Context);
  const navigate = useNavigate();

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(getWindowSize());
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/result/all/${query}`);
    }
  };

  const goToHomePage = () => {
    navigate(`/`);
    setQuery("");
  };
  return (
    <div className="flex justify-between items-center pt-7 sm:mr-10 sm:ml-10 sm:justify-center md:justify-between ">
      <div className="flex items-center sm:space-x-4 md:space-x-6 lg:space-x-16 ">
        <Image
          image={windowSize.innerWidth > 1024 ? googleLogo : googleLogoMini}
          styleClass={`h-7 hidden sm:block cursor-pointer`}
          onClickAction={goToHomePage}
        />
        <SearchBar
          styleClass={` rounded-full pb-2.5 pt-2.5 pl-10 pr-10 border focus:outline-none  focus-within:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-within:border-0 w-[20rem] sm:w-[40rem]  w-screen 

          `}
          value={query}
          onChangeAction={() => handleSearchQuery(event)}
          onKeyUpAction={searchQueryHandler}
        />
      </div>

      <div className={`flex items-center space-x-5 ml-10`}>
        <HeaderMenu
          icon={<FiSettings />}
          styleClass={"text-xl text-[#72767a] hidden md:block"}
        />
        <HeaderMenu
          icon={<CgMenuGridO />}
          styleClass={"text-xl text-[#72767a] hidden md:block sm:text-2xl"}
        />
        <Button
          title={"SignIn "}
          styleClass={
            "pt-2 pb-2 pr-4 pl-4 bg-[#4285f4] rounded text-white text-sm hidden lg:flex "
          }
        />
      </div>
    </div>
  );
};

export default ResultPageHeader;
