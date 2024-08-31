import React, { useContext } from "react";

import { AuthContext } from "../../../AuthProvider/AuthProvider";

const PerProblem = () => {
  const { eachProblem } = useContext(AuthContext);
  const {
    problemName,
    describeProblem,
    innerInputProblem,
    outerInputProblem,
    outputProblem,
  } = eachProblem;
  return (
    <div className="flex flex-col  p-2 border-2 border-primary rounded-lg">
      <div className="text-center text-xs md:text-lg lg:text-2xl font-bold">
        <h1>{problemName}</h1>
      </div>
      <div className="text-xs md:text-base lg:text-lg">
        <p>{describeProblem}</p>
      </div>
      <div className="text-xs md:text-base lg:text-lg mt-12">
        <h1 className="text-lg font-semibold">Input</h1>
        {outerInputProblem && (
          <p className="text-xs md:text-sm lg:text:sm">{outerInputProblem}</p>
        )}
        {innerInputProblem && (
          <p className="text-xs md:text-sm lg:text:sm">{innerInputProblem}</p>
        )}
      </div>
      <div className="text-xs md:text-base lg:text-lg mt-12">
        <h1 className="text-lg font-semibold">Output</h1>
        <p className="text-xs md:text-sm lg:text:sm">{outputProblem}</p>
      </div>
    </div>
  );
};

export default PerProblem;
