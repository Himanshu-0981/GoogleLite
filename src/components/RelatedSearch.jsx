import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

export const RelatedSearch = () => {
  const { resultData, query } = useContext(Context);
  const { people_also_search } = resultData;
  return (
    <React.Fragment>
      <h1 className="text-slate-700 text-xl mt-5 mb-3">
        People also search for
      </h1>
      <div className=" flex flex-wrap sm:flex-row text-center ">
        {people_also_search?.map((res, index) => {
          return (
            <React.Fragment key={index}>
              <Link
                to={`https://www.google.com/search?q=${res?.title}`}
                target="_blank"
                className="rounded-md  border sm:border-2 text-center w-20 sm:w-28 mr-0 sm:mr-1 pb-1 cursor-pointer "
              >
                <img src={res?.thumbnail} className="w-20 sm:w-28 " />
                <p className="pt-3">{res?.title}</p>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};
