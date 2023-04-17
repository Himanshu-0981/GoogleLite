import { useContext } from "react";

import { Context } from "../context/Context";

export const DidYouMeanPage = () => {
  const { resultData } = useContext(Context);
  return (
    <div className="mb-2">
      {resultData?.did_you_mean !== null ? (
        <div>
          did you mean
          <span className=" ml-1 italic text-blue-600 cursor-pointer hover:underline">
            {resultData?.did_you_mean}
          </span>{" "}
          ?
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
/**
 *
 *
 */
