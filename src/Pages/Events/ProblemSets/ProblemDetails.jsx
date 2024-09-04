import React, { useContext } from "react";
import CompilerJudge from "../../../Components/CompilerJudge/CompilerJudge";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import noevent from "../../../assets/images/404 error with people holding the numbers-amico.svg";
import CountDownTime from "../../../../Service/CountDown/CountDownTime";

const ProblemDetails = () => {
  const { outputCode, codeLength, CreateProblemScore, countdownDate } =
    useContext(AuthContext);
  const { result } = outputCode;
  // console.log("inside code details", codeLength);
  const location = useLocation();
  const {
    problemNumber,
    problemName,
    describeProblem,
    innerInputProblem,
    outerInputProblem,
    outputProblem,
    inputCodeLength,
  } = location?.state;
  const inputCodeLengthInt = parseInt(inputCodeLength);
  return (
    <div>
      <div>
        <CountDownTime></CountDownTime>
      </div>
      {countdownDate ? (
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
          <div className="mt-10">
            <CompilerJudge></CompilerJudge>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() =>
                CreateProblemScore(
                  problemNumber,
                  codeLength,
                  inputCodeLengthInt,
                  outputProblem,
                  result
                )
              }
              className="btn btn-primary mx-2"
            >
              Submit code
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl text-center text-[#7c8deb] font-bold">
              Ups!... no problem found
            </h1>
          </div>
          <div className="flex justify-center">
            <img className="w-1/2" src={noevent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemDetails;
