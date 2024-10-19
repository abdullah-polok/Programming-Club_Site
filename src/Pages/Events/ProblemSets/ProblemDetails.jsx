import React, { useContext, useEffect } from "react";
import CompilerJudge from "../../../Components/CompilerJudge/CompilerJudge";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import noevent from "../../../assets/images/404 error with people holding the numbers-amico.svg";
import CountDownTime from "../../../../Service/CountDown/CountDownTime";

const ProblemDetails = () => {
  const {
    outputCode,
    codeLength,
    CreateProblemScore,
    countdownDate,
    isPassed,
  } = useContext(AuthContext);
  const { result } = outputCode;
  // console.log("inside code details", codeLength);
  const location = useLocation();
  // useEffect(() => {
  //   console.log(localStorage.getItem("input").length);
  // });
  const {
    problemNumber,
    problemName,
    describeProblem,
    inputProblem,
    outputProblem,
    inputCodeLength,
    explanation,
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
            <h1 className="text-[#7c8deb] mb-2">
              {problemNumber}.{problemName}
            </h1>
          </div>
          <div className="text-xs md:text-base lg:text-lg">
            <p>{describeProblem}</p>
          </div>
          {/* Input and output grid */}
          <div className="flex w-full gap-2">
            <div className="text-xs md:text-base lg:text-lg mt-12 flex-1">
              <h1 className="text-lg font-semibold text-center text-[#7c8deb] mb-2">
                Sample Input
              </h1>
              <textarea
                readOnly
                className="text-xs  md:text-sm lg:text-base rounded-lg border-2 border-[#7c8deb] bg-indigo-50 p-2 focus:outline-none overflow-hidden w-full h-32 resize-none"
                value={inputProblem}
              ></textarea>
            </div>
            <div className="text-xs text-center md:text-base lg:text-lg mt-12 flex-1">
              <h1 className="text-lg font-semibold text-[#7c8deb] mb-2">
                Sample Output
              </h1>
              <textarea
                readOnly
                className="text-xs  md:text-sm lg:text-base rounded-lg border-2 border-[#7c8deb] bg-indigo-50 p-2 focus:outline-none overflow-hidden w-full h-32 resize-none"
                value={outputProblem}
              ></textarea>
            </div>
          </div>
          <div>
            {explanation && (
              <div className="text-xs text-center md:text-base lg:text-lg mt-12 flex-1">
                <h1 className="text-lg font-semibold text-[#7c8deb] mb-2">
                  Explanation
                </h1>
                <textarea
                  readOnly
                  className="text-xs  md:text-sm lg:text-base rounded-lg border-2 border-[#7c8deb] bg-indigo-50 p-2 focus:outline-none overflow-hidden w-full h-32 resize-none"
                  value={explanation}
                ></textarea>
              </div>
            )}
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
              className="btn bg-[#7c8deb] text-white text-lg mx-2"
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
