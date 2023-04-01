import React, { useContext, useRef, useEffect } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

import { Context } from "../context/Context";
import HeaderMenu from "../components/HeaderMenu";
import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";
import googleLogoMini from "../assets/logo-google-mini.svg";

const ResultPageHeader = () => {
  const { query, setQuery } = useContext(Context);

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

  // console.log(windowSize);

  return (
    <div className="flex justify-between items-center pt-7 pr-10 pl-10">
      <div className="flex items-center space-x-2 sm:space-x-10 lg:space-x-16">
        <Image
          image={windowSize.innerWidth > 1053 ? googleLogo : googleLogoMini}
          styleClass={`h-7  sm:block `}
        />
        <SearchBar
          styleClass={`rounded-full pb-2.5 pt-2.5 pl-10 pr-10 border focus:outline-none  focus-within:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-within:border-0 w-[18rem] sm:w-[30rem] lg:w-[40rem]

          `}
          value={query}
          onChangeAction={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className={`flex items-center space-x-5 ml-10`}>
        <HeaderMenu
          icon={<FiSettings />}
          styleClass={"text-xl text-[#72767a] hidden sm:block"}
        />
        <HeaderMenu
          icon={<CgMenuGridO />}
          styleClass={"text-xl text-[#72767a] sm:text-2xl"}
        />
        <Button
          title={"SignIn "}
          styleClass={
            "pt-2 pb-2 pr-4 pl-4 bg-[#4285f4] rounded text-white text-sm "
          }
        />
      </div>
    </div>
  );
};

export default ResultPageHeader;

// ${
// windowSize.innerWidth > 1053
//   ? "w-[41rem] transition-all duration-150"
//   : "w-[30rem] transition-all duration-150"
//   ? "w-[20rem] transition all duration-150"
//   : "w-10[rem] transition all duration-150"
// }
