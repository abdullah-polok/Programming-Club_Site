import React, { useContext } from "react";

import { AuthContext } from "../../../AuthProvider/AuthProvider";
import CompilerJudge from "../../../Components/CompilerJudge/CompilerJudge";

const PerProblem = () => {
  const { eachProblem, outputCode } = useContext(AuthContext);
  const { result } = outputCode;
  console.log("Output inside each problem", outputCode.result);
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
          <p className="text-xs md:text-sm lg:text:sm bg-slate-200 px-2">
            {outerInputProblem}
          </p>
        )}
        {innerInputProblem && (
          <p className="text-xs md:text-sm lg:text:sm bg-slate-300 px-2">
            {innerInputProblem}
          </p>
        )}
      </div>
      <div className="text-xs md:text-base lg:text-lg mt-12">
        <h1 className="text-lg font-semibold">Output</h1>
        <p className="text-xs md:text-sm lg:text:sm  bg-slate-300 px-2">
          {outputProblem}
        </p>
      </div>
      <div className="text-xs md:text-base lg:text-lg mt-12">
        <h1 className="text-lg font-semibold">Status</h1>
        {outputProblem === result ? (
          <p className="text-xs md:text-sm lg:text-lg w-14 text-green-700  bg-green-400 px-2 font-bold">
            Pass
          </p>
        ) : (
          <p className="text-xs md:text-sm lg:text-lg w-14 text-red-900  bg-red-400 px-2 font-bold">
            Fail
          </p>
        )}
      </div>
      <div className="mt-10">
        <CompilerJudge></CompilerJudge>
      </div>
    </div>
  );
};

export default PerProblem;
