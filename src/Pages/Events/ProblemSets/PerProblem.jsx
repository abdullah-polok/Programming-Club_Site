import React from "react";

import { useNavigate } from "react-router-dom";

const PerProblem = ({ perProblem }) => {
  const navigate = useNavigate();
  const { problemName, problemNumber } = perProblem;
  const openProblem = () => {
    return navigate("/problemdetails", { state: perProblem });
  };
  // console.log(localStorage.getItem("firstscores"));
  return (
    <div className="flex justify-between p-2 bg-indigo-50 mt-1 rounded-lg">
      <h1>{problemNumber}</h1>
      <h1>{problemName}</h1>
      {problemNumber === "1" && localStorage.getItem("firstscores") ? (
        <p className="bg-green-500 text-white px-2 rounded-md py-1">Accepted</p>
      ) : problemNumber === "2" && localStorage.getItem("secondscores") ? (
        <p className="bg-green-500 text-white px-2 rounded-md py-1">Accepted</p>
      ) : problemNumber === "3" && localStorage.getItem("thirdscores") ? (
        <p className="bg-green-500 text-white px-2 rounded-md py-1">Accepted</p>
      ) : (
        <button
          onClick={openProblem}
          className="btn btn-sm bg-[#7c8deb] text-white"
        >
          Open
        </button>
      )}
    </div>
  );
};

export default PerProblem;
