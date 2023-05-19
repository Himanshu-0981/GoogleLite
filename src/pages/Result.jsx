import { useContext, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import ResultPageHeader from "../components/ResultPageHeader";
import { Context } from "../context/Context";
import { Button } from "../components/Button";
import notFound from "../assets/notFound.webp";
import { RelatedSearch } from "../components/RelatedSearch";
import { DidYouMeanPage } from "../components/DidYouMeanPage";
import { ErrorMessage } from "../../error/ErrorMessage";
import { Footer } from "../components/Footer";
import Loader from "../shared/Loader";
import { About } from "../components/About";

const Result = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const { resultData, resultImage, apiCalled, error } = useContext(Context);
  const { knowledge_panel, results } = resultData || {};

  const urlRegex = /(^\w+:|^)\/\//;

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowImage(false);
  };

  const handleShowImage = () => {
    setShowImage(true);
    setShowAbout(false);
  };

  return (
    <>
      <div>
        <ResultPageHeader />
        <Navbar />
        <hr className="mt-5" />
      </div>
      {/* ***** */}
      {error ? (
        <ErrorMessage msg={error.message} />
      ) : (
        <div>
          {apiCalled ? (
            <div className=" text-sm sm:text-base sm:w-[40rem] 2xl:ml-52 xl:ml-52 lg:ml-52 md:ml-28 sm:ml-20 ml-5 mr-20 mt-5   text-[#202124] ">
              <div>
                <DidYouMeanPage />
              </div>
              <div
                className={`"flex items-center" ${
                  (knowledge_panel?.title &&
                    knowledge_panel?.type &&
                    knowledge_panel?.description) === null
                    ? "hidden"
                    : "sm:block md:flex "
                }`}
              >
                <div className="flex">
                  <div>
                    <img
                      src={
                        resultImage[0].url === null
                          ? notFound
                          : resultImage[0].url
                      }
                      alt="pic"
                      className="h-16 rounded"
                    />
                  </div>
                  <div className="ml-6">
                    {knowledge_panel && (
                      <div className="text-2xl">{knowledge_panel.title}</div>
                    )}

                    <p className="text-base flex items-center mt-2">
                      {knowledge_panel?.type}{" "}
                      <IoMdMore className="ml-2 cursor-pointer" />
                    </p>
                  </div>
                </div>
                {/* btn div */}
                <div className="flex ml-0 md:ml-10 space-x-3 mt-5 md:mt-0">
                  <Button
                    title={"About"}
                    onClickAction={handleShowAbout}
                    styleClass={
                      "pt-2 pb-2 pr-4 pl-4 bg-[#E2EEFF] rounded-full text-[#0060F0] border border-[#0060F0] text-sm "
                    }
                  />
                  <Button
                    title={"Images"}
                    onClickAction={handleShowImage}
                    styleClass={
                      "pt-2 pb-2 pr-4 pl-4 bg-[#E2EEFF] rounded-full text-[#0060F0] border border-[#0060F0] text-sm"
                    }
                  />
                </div>
              </div>

              {/* Image */}

              <div className={`${"flex mt-5 w-32 sm:w-40 md:w-52 "}`}>
                {showAbout ? (
                  <About knowledgePanel={knowledge_panel} />
                ) : (
                  <>
                    <img
                      src={resultImage[1]?.url}
                      alt="logo"
                      className="rounded-l-lg w-40 h-32"
                    />
                    <img
                      src={resultImage[2]?.url}
                      alt="logo"
                      className=" w-40 h-32"
                    />
                    <img
                      src={resultImage[3].url}
                      alt="logo"
                      className="rounded-r-lg w-40 h-32 hidden sm:block"
                    />
                  </>
                )}
              </div>

              {/* People searches */}
              <div>
                <RelatedSearch />
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
                            {url.slice(0, 30)}
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
          ) : (
            <Loader />
          )}
        </div>
      )}
    </>
  );
};

export default Result;
//
