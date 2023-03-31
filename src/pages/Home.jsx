import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { countryLanguages } from "../language/language";
import { Context } from "../context/Context";
import { Navbar } from "../components/Header";

export default function Home() {
  const { query, setQuery } = useContext(Context);
  const [languages] = useState(countryLanguages);
  const navigate = useNavigate();

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleCloseBtn = () => {
    setQuery("");
  };

  const searchQueryHandler = (event) => {
    if ((event.key === "Enter" || event === "searchBtn") && query.length > 0) {
      navigate(`/result/${query}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-100vh">
        <Image
          image={googleLogo}
          styleClass={"h-[90px] mt-3 text-center mb-6"}
        />
        <SearchBar
          styleClass={
            "rounded-full w-[37rem] pb-2.5 pt-2.5 pl-10 pr-10 border focus:outline-none  focus-within:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-within:border-0"
          }
          onChangeAction={() => handleSearchQuery(event)}
          value={query}
          onClickAction={handleCloseBtn}
          onKeyUpAction={searchQueryHandler}
        />
        <div className="flex space-x-3 space-y-8">
          <div></div>
          <Button
            title={"Google Search"}
            styleClass={
              "pt-2 pb-2 pr-4 pl-4 bg-[#F0F1F2] text-black font-light rounded  text-sm"
            }
            onClickAction={() => searchQueryHandler("searchBtn")}
          />
          <Button
            title={"I'm Feeling Lucky"}
            styleClass={
              "pt-2 pb-2 pr-4 pl-4 bg-[#F0F1F2] text-black font-light rounded  text-sm"
            }
          />
        </div>
        <div className="flex items-center text-[#1a0dab]  space-x-2  text-xs mt-8">
          <p className="text-black text-[13px] ">Google offered in :</p>
          {languages.map((language, index) => (
            <Link key={index}>{language}</Link>
          ))}
        </div>
      </div>
      <footer className=" fixed bottom-0">
        <Footer />
      </footer>
    </>
  );
}
