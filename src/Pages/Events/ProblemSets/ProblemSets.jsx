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
          perProblem={perProblem}
          key={perProblem.problemName}
          index={index + 1}
        ></PerProblem>
      ))}
    </>
  );
};

export default ProblemSets;
