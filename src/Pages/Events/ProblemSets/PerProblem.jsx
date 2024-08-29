import React from "react";
import { Link } from "react-router-dom";

const PerProblem = ({ perProblem, index }) => {
  const { problemName } = perProblem.dataToStore;

  return (
    <>
      <Link>
        <div className="flex justify-between p-2 bg-slate-200 mt-1 rounded-lg">
          <h1>{index}</h1>
          <h1>{problemName}</h1>
          <h1>Accept</h1>
        </div>
      </Link>
    </>
  );
};

export default PerProblem;
