import React, { useContext, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

import { Navbar } from "../components/Navbar";
import ResultPageHeader from "../components/ResultPageHeader";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import notFound from "../assets/notFound.webp";

const Result = () => {
  const { resultData, loading } = useContext(Context);
  const {
    dictionary,
    did_you_mean,
    featured_snippet,
    knowledge_panel,
    location,
    people_also_ask,
    people_also_search,
    results,
    time,
  } = resultData;

  const { metadata, type, url, images } = knowledge_panel;

  const regex = /(<([^>]+)>)/gi;
  const urlRegex = /(^\w+:|^)\/\//;
  return (
    <>
      <div>
        <ResultPageHeader />
        <Navbar />
        <hr className="mt-5" />
      </div>
      {/* ***** */}
      <div className=" ml-52 pr-[30rem]  mt-3 text-[#202124]">
        <div className="flex items-center">
          <div>
            <img src={images[0]?.url} alt="logo" className="h-16 " />
          </div>
          <div className="ml-6">
            <p className="text-3xl">{knowledge_panel?.title}</p>
            <p className="text-base flex items-center mt-2">
              {knowledge_panel?.type}{" "}
              <IoMdMore className="ml-2 cursor-pointer" />
            </p>
          </div>
          <div className="flex ml-10 space-x-3">
            <Button
              title={"About"}
              styleClass={
                "pt-2 pb-2 pr-4 pl-4 bg-[#E2EEFF] rounded-full text-[#0060F0] border border-[#0060F0] text-sm "
              }
            />
            <Button
              title={"Images"}
              styleClass={
                "pt-2 pb-2 pr-4 pl-4 bg-[#E2EEFF] rounded-full text-[#0060F0] border border-[#0060F0] text-sm"
              }
            />
            <Button
              title={"Videos"}
              styleClass={
                "pt-2 pb-2 pr-4 pl-4 bg-[#E2EEFF] rounded-full text-[#0060F0] border border-[#0060F0] text-sm"
              }
            />
          </div>
        </div>

        {/* Image */}

        <div className="flex w-screen h-32 mt-10">
          <img
            src={images[1]?.url ? images[1]?.url : notFound}
            alt="logo"
            className="rounded-l-lg "
          />
          <img
            src={images[2]?.url ? images[2]?.url : notFound}
            alt="logo"
            // className="h-16 "
          />
          {/* <img
            src={images[3]?.url ? images[3]?.url : notFound}
            alt="logo"
            // className="h-16 "
          /> */}
          <img
            src={images[4]?.url ? images[4]?.url : notFound}
            alt="logo"
            className="rounded-r-lg "
          />
        </div>

        {/* ******** */}
        {results?.map((item, index) => {
          const { description, favicons, title, url } = item;
          return (
            <div key={index} className="mt-5">
              <div>
                <div className="flex items-center">
                  <div className="">
                    <img
                      src={favicons?.low_res}
                      alt="logo"
                      className="h-[30px] w-[30px] rounded-[50%] bg-[#f1f3f4] p-1"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm">
                      {url
                        .replace(urlRegex, "")
                        .split("/")[0]
                        .replace("www.", "")
                        .replace("en.m.", "")
                        .replace(".com", "")
                        .replace(".org", "")
                        .replace(".net", "")}
                    </p>
                    <Link to={url} target="_blank" className="text-xs">
                      {url}
                    </Link>
                  </div>
                </div>
                <Link
                  className="mt-4 text-[#1a0dab] hover:underline text-[20px]"
                  to={url}
                  target="_blank"
                >
                  {title}
                </Link>
                <p className="font-light text-[14px]">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
