import React, { useContext } from "react";

import { Navbar } from "../components/Navbar";
import ResultPageHeader from "../components/ResultPageHeader";
import { Context } from "../context/Context";

const ImagesPage = () => {
  const { resultImage } = useContext(Context);
  return (
    <div className="w-screen ">
      <ResultPageHeader />
      <Navbar />
      <hr className="mt-5" />
      {/* Image */}
      <div className="flex flex-wrap justify-between pr-5 pl-5 ">
        {resultImage?.map((image, index) => {
          return (
            <div className=" justify-center mt-5 " key={index}>
              <img
                src={image?.url}
                alt="img"
                className="h-40  shadow-zinc-500  p-2 rounded-2xl hover:shadow-2xl "
              />
              <p className="text-xs">{image?.origin?.website?.domain}</p>
              <p className="text-sm">
                {image?.origin?.title?.slice(0, 25)} ...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesPage;
