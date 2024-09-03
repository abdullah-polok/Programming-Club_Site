import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import PerProblem from "./PerProblem";
import { Link } from "react-router-dom";
import noevent from "../../../assets/images/404 error with people holding the numbers-amico.svg";
const ProblemSets = () => {
  const { problemCollections, isCountdownActive, handleFinishedContest } =
    useContext(AuthContext);
  return (
    <>
      {isCountdownActive ? (
        <div>
          <div className="flex justify-between border-2 rounded-lg p-2">
            <h1>No</h1>
            <h1>Problem Name</h1>
            <h1>Status</h1>
          </div>
          {problemCollections.map((perProblem, index = 0) => (
            <PerProblem
              index={index + 1}
              key={index}
              perProblem={perProblem.dataToStore}
            ></PerProblem>
          ))}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleFinishedContest}
              className="btn btn-warning "
            >
              Finished
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl text-center text-[#7c8deb] font-bold">
              Ups!... no problems found
            </h1>
          </div>
          <div className="flex justify-center">
            <img className="w-1/2" src={noevent} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProblemSets;
{
  /* <Link to={{ pathname: "/perproblem", state: perProblem.dataToStore }}>
          <div className="flex justify-between p-2 bg-slate-200 mt-1 rounded-lg">
            <h1>{index + 1}</h1>
            <h1>{perProblem.dataToStore.problemName}</h1>
            <h1>Accept</h1>
          </div>
        </Link> */
}
