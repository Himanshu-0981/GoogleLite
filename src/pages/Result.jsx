import React, { useContext, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

import { Navbar } from "../components/Navbar";
import ResultPageHeader from "../components/ResultPageHeader";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
// import { fetchData } from "../utils/api";

const Result = () => {
  const { resultData, loading } = useContext(Context);

  const SEARCH_RESULTS = resultData?.searchInformation?.formattedTotalResults;
  const RESULT_TIME = resultData?.searchInformation?.searchTime.toFixed(2);
  const regex = /(<([^>]+)>)/gi;
  return (
    <>
      <ResultPageHeader />
      <Navbar />
      <hr className="mt-5" />

      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="w-[35rem] lg:ml-52 text-[#202124] ">
          <p className="text-sm mt-3 mb-3">
            About {SEARCH_RESULTS} results ({RESULT_TIME}) second
          </p>
          <Button
            title={"In English"}
            styleClass={"border border-opacity-50  p-1 rounded"}
          />
          {/* --->>>>>><<<<<<---- */}
          {loading ? (
            <h1>loading...</h1>
          ) : (
            <h1 className="text-xl">
              {resultData?.items[0]?.htmlSnippet?.replace(regex, "")}
            </h1>
          )}
          <div className="flex flex-col mt-5">
            <div className="flex">
              <div className="flex items-center rounded-full mr-2 ">
                <BsFillPersonFill size={25} />
              </div>
              <div>
                <h1>{resultData?.items[0]?.displayLink}</h1>
                <div className="flex">
                  <p className="text-xs">{resultData?.items[0]?.link}</p>
                  <IoMdMore />
                </div>
              </div>
            </div>
            <Link
              className="mt-3 text-xl text-[#3b22ab] hover:underline"
              to={resultData?.items[0]?.formattedUrl}
              target="_blank"
            >
              {resultData?.items[0]?.htmlTitle.replace(regex, "").split(0, 60)}
            </Link>
          </div>
          <div>
            {resultData?.items?.map((res, index) => {
              return (
                <>
                  {index !== 0 ? (
                    <div className="flex flex-col mt-5" key={index}>
                      <div className="flex">
                        <div className="flex items-center rounded-full mr-2 ">
                          <BsFillPersonFill size={25} />
                        </div>
                        <div>
                          <h1>{res?.displayLink}</h1>
                          <div className="flex">
                            <p className="text-xs">{res?.link}</p>
                            <IoMdMore />
                          </div>
                        </div>
                      </div>
                      <Link
                        className="mt-3 text-xl text-[#3b22ab] hover:underline"
                        to={res?.formattedUrl}
                        target="_blank"
                      >
                        {res?.htmlTitle.replace(regex, "").split(0, 60)}
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
