import React from "react";

const Submission = () => {
  return (
    <div className=" mt-4">
      <input
        type="text"
        placeholder="Paste Here"
        className="input input-bordered input-lg w-full h-96"
      />
      <div className="text-center mt-6">
        <button className="btn bg-indigo-400 text-white">Submit</button>
      </div>
    </div>
  );
};

export default Submission;
