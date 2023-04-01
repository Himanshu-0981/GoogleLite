import React, { useContext } from "react";

import { Navbar } from "../components/Navbar";
import ResultPageHeader from "../components/ResultPageHeader";
import { Context } from "../context/Context";

const Result = () => {
  const { data } = useContext(Context);
  // console.log(data);
  return (
    <>
      <ResultPageHeader />
      <Navbar />
      <hr className="mt-5" />
      <div></div>
    </>
  );
};

export default Result;
