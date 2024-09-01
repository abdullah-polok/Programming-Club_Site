import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import PerProblem from "./PerProblem";
import { Link } from "react-router-dom";

const ProblemSets = () => {
  const { problemCollections } = useContext(AuthContext);
  return (
    <>
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
