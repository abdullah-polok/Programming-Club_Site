import React, { useContext } from "react";

import { AuthContext } from "../../../AuthProvider/AuthProvider";
import CompilerJudge from "../../../Components/CompilerJudge/CompilerJudge";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProblemDetails from "./ProblemDetails";

const PerProblem = ({ perProblem, index }) => {
  const navigate = useNavigate();
  const { problemName } = perProblem;
  const openProblem = () => {
    return navigate("/problemdetails", { state: perProblem });
  };
  return (
    <div className="flex justify-between p-2 bg-slate-200 mt-1 rounded-lg">
      <h1>{index}</h1>
      <h1>{problemName}</h1>
      <button
        onClick={openProblem}
        className="btn btn-sm bg-blue-400 text-white"
      >
        Open
      </button>
    </div>
  );
};

export default PerProblem;
