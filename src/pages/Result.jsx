import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

import { Context } from "../context/Context";
import { fetchData } from "../utils/api";
import HeaderMenu from "../components/HeaderMenu";
import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";
import { colors } from "../colors/colors";

const Result = () => {
  const { data, loading, query, setQuery } = useContext(Context);
  const { q } = useParams();

  return (
    <>
      <div className="flex justify-between items-center pt-7 pr-10 pl-10">
        <div className="flex items-center space-x-14 ">
          <Image image={googleLogo} styleClass={"h-7"} />
          <SearchBar
            styleClass={
              "rounded-full w-[41rem] pb-2.5 pt-2.5 pl-10 pr-10 border focus:outline-none  focus-within:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-within:border-0"
            }
            value={query}
            onChangeAction={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className={`flex items-center space-x-5`}>
          <HeaderMenu
            icon={<FiSettings />}
            styleClass={"text-2xl text-[#72767a] "}
          />
          <HeaderMenu
            icon={<CgMenuGridO />}
            styleClass={"text-2xl text-[#72767a] "}
          />
          <Button
            title={"Sign in "}
            styleClass={
              "pt-2 pb-2 pr-4 pl-4 bg-[#4285f4] rounded text-white text-sm"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Result;
