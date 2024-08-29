import React, { useState } from "react";
import CompilerJudge from "../../Components/CompilerJudge/CompilerJudge";

const Compiler = () => {
  return (
    <div>
      {/* <div class="iframe-container">
        <iframe
          className="w-full h-[1000px]"
          src="https://www.programiz.com/java-programming/online-compiler/"
          title="Programiz Online Compiler"
        ></iframe>
      </div>
      <div>
        <div className="content-title mt-10">
          <h1 className=" text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
            Code Submission
          </h1>
        </div>
        <div>
          <div className=" flex items-center mt-4 ">
            <input
              type="text"
              placeholder="Paste your code here"
              className="input input-bordered input-primary w-full  h-[150px]"
              required
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onPaste={handlePaste}
            />
          </div>
          <div className=" flex items-center mt-4">
            <button
              onClick={handleSaveClick}
              className="btn text-white bg-[#7c8deb] btn-wide"
            >
              Submit
            </button>
          </div>
        </div>
      </div> */}
      <div>{/* <CodeEditorComponent></CodeEditorComponent> */}</div>

      <div>
        <CompilerJudge></CompilerJudge>
      </div>
    </div>
  );
};

export default Compiler;
