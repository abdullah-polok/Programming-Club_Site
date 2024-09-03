import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
const Admin = () => {
  const {
    setCreateProblem,
    checkStoredProblem,
    handleCreateProblem,
    startCountdown,
    resetCountdown,
  } = useContext(AuthContext);

  const handleProblem = async (e) => {
    e.preventDefault();
    const form = e.target;
    const problemNumber = form.problemNumber.value;
    const problemName = form.problemName.value;
    const describeProblem = form.describeProblem.value;
    const outerInputProblem = form.outerInputProblem.value;
    const innerInputProblem = form.innerInputProblem.value;
    const inputCodeLength = form.inputCodeLength.value;
    const outputProblem = form.outputProblem.value;
    const date = form.date.value;
    const problemset = {
      problemNumber: problemNumber,
      problemName: problemName,
      describeProblem: describeProblem,
      outerInputProblem: outerInputProblem,
      innerInputProblem: innerInputProblem,
      inputCodeLength: inputCodeLength,
      outputProblem: outputProblem,
      date: date,
    };
    setCreateProblem(problemset);
    await handleCreateProblem();
    if (checkStoredProblem) {
      e.target.reset();
    }
  };

  const handleStartCount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const maxtime = form.maxtime.value;
    const maxtimeInt = parseInt(maxtime);
    await addDoc(collection(db, "contestTimeSet"), { maxtimeInt });
    e.target.reset();
  };
  return (
    <div>
      <div className="divider divider-primary text-center font-semibold text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Admin Page
      </div>
      <div>
        <div>
          <h1 className="text-sm md:text-lg lg:text-2xl font-semibold text-[#7c8deb]">
            Create a problem
          </h1>
        </div>
        <div>
          <form onSubmit={handleProblem}>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Problem Number
              </h1>
              <input
                type="text"
                name="problemNumber"
                className="grow w-full h-10 border-2 border-primary rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Problem Name
              </h1>
              <input
                type="text"
                name="problemName"
                className="grow w-full h-10 border-2 border-primary rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Describe your problem
              </h1>
              <input
                type="text"
                name="describeProblem"
                className="grow w-full h-36 border-2 border-primary rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Outer Input
              </h1>
              <input
                type="text"
                name="outerInputProblem"
                className="grow w-full h-10 border-2 border-primary rounded-lg"
                required
              />
            </div>

            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Inner Input
              </h1>
              <input
                type="text"
                name="innerInputProblem"
                className="grow w-full h-10 border-2 border-primary rounded-lg"
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Input code length
              </h1>
              <input
                type="number"
                name="inputCodeLength"
                className="grow w-full h-10 border-2 border-primary rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Output
              </h1>
              <input
                type="text"
                name="outputProblem"
                className="grow w-full h-20 border-2 border-primary rounded-lg"
                required
              />
            </div>
            <div className="form-control mt-2">
              <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                Date
              </h1>
              <input
                type="text"
                name="date"
                className="grow w-full h-20 border-2 border-primary rounded-lg"
                required
              />
            </div>

            <div className=" flex justify-center">
              <button className="form-control   mt-4 btn btn-sm btn-primary">
                Submit
              </button>
            </div>
          </form>
          <div className="mt-10">
            <h1 className="text-sm md:text-lg lg:text-2xl font-semibold text-[#7c8deb]">
              Set Contest Timer
            </h1>
            <div>
              <div>
                <form onSubmit={handleStartCount}>
                  <div className="form-control mt-2">
                    <h1 className="input  input-sm w-full max-w-xs text-left gap-2 text-xs md:text-base lg:text-lg">
                      Maximum contest time
                    </h1>
                    <input
                      type="number"
                      name="maxtime"
                      className="grow w-full h-10 border-2 border-primary rounded-lg"
                      required
                    />
                  </div>
                  <div className=" flex items-center">
                    <button className="form-control   mt-4 btn btn-sm btn-primary">
                      Start Countdown
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <button
              className="btn btn-sm btn-primary mt-4 "
              onClick={resetCountdown}
            >
              Reset Countdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
