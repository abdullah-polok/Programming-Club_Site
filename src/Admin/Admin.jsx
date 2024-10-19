import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/firebase.config";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
const Admin = () => {
  const { setCreateProblem, handleCreateProblem, resetTimer } =
    useContext(AuthContext);

  const handleProblem = (e) => {
    e.preventDefault();
    const form = e.target;
    const problemNumber = form.problemNumber.value;
    const problemName = form.problemName.value;
    const describeProblem = form.describeProblem.value;
    const inputProblem = form.inputProblem.value;
    const inputCodeLength = form.inputCodeLength.value;
    const outputProblem = form.outputProblem.value;
    const explanation = form.explanation.value;
    const problemset = {
      problemNumber: problemNumber,
      problemName: problemName,
      describeProblem: describeProblem,
      inputProblem: inputProblem,
      inputCodeLength: inputCodeLength,
      outputProblem: outputProblem,
      explanation: explanation,
    };
    setCreateProblem(problemset);
    handleCreateProblem();
    e.target.reset();
  };

  const handleStartCount = async (e) => {
    e.preventDefault();
    const form = e.target;
    const starTime = form.StartTime.value;
    const endTime = form.endTime.value;
    const timeDuration = form.timeDuration.value;
    console.log(starTime, endTime);
    await addDoc(collection(db, "contestTimeSet"), {
      starTime,
      endTime,
      timeDuration,
    });
    Swal.fire({
      title: "Great!",
      text: "Contest timer added successfully",
      icon: "success",
    });
    e.target.reset();
  };
  return (
    <div className="min-h-screen">
      <div className="divider divider-primary text-center font-semibold text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Admin Page
      </div>
      <div className="collapse collapse-arrow bg-indigo-50">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-sm md:text-lg lg:text-2xl text-center font-semibold text-[#7c8deb]">
            Create a problem
          </h1>
        </div>
        <div className="collapse-content">
          <div className="mt-6">
            <div>
              <form onSubmit={handleProblem}>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Problem Number
                  </h1>
                  <textarea
                    type="text"
                    name="problemNumber"
                    className="grow w-full h-10 border-2 border-primary rounded-lg p-2 overflow-hidden"
                    required
                    placeholder="eg:1,2,3"
                  ></textarea>
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Problem Name
                  </h1>
                  <textarea
                    type="text"
                    name="problemName"
                    className="grow w-full h-10 border-2 border-primary rounded-lg p-2 overflow-hidden"
                    required
                    placeholder="name"
                  ></textarea>
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Describe your problem
                  </h1>
                  <textarea
                    type="text"
                    name="describeProblem"
                    className="grow w-full h-36 border-2 border-primary rounded-lg p-2"
                    required
                    rows={5}
                  ></textarea>
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Input
                  </h1>
                  <textarea
                    type="text"
                    name="inputProblem"
                    className="grow w-full h-20 border-2 border-primary rounded-lg p-2"
                    rows={5} // Set the number of visible rows
                    cols={40} // Set the width of the
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Input code length
                  </h1>
                  <input
                    type="number"
                    name="inputCodeLength"
                    className="grow w-full h-10 border-2 border-primary rounded-lg p-2"
                    required
                  />
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Output
                  </h1>
                  <textarea
                    type="text"
                    name="outputProblem"
                    className="grow w-full h-20 border-2 border-primary rounded-lg p-2"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-2">
                  <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                    Problem explanation
                  </h1>
                  <textarea
                    type="text"
                    name="explanation"
                    className="grow w-full h-20 border-2 border-primary rounded-lg p-2"
                  ></textarea>
                </div>

                <div className=" flex justify-center">
                  <button className="form-control mt-4 btn btn-sm bg-[#7c8deb] text-white">
                    Submit
                  </button>
                </div>
              </form>
              <div className="mt-10">
                <h1 className="text-sm md:text-lg lg:text-2xl text-center font-semibold text-[#7c8deb]">
                  Set Contest Timer
                </h1>
                <div>
                  <h1 className="text-sm md:text-sm lg:text-lg font-semibold text-[#7c8deb]">
                    Visit this site for ISO time format
                  </h1>
                  <div className="m-4">
                    <a
                      className="bg-indigo-100 p-2 rounded-lg"
                      href="https://greenwichmeantime.com/articles/clocks/iso/"
                    >
                      Greenwich Mean Time
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <form onSubmit={handleStartCount}>
                      <div className="form-control mt-2">
                        <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                          Contest starting time
                        </h1>
                        <input
                          type="text"
                          name="StartTime"
                          className="grow w-full h-10 border-2 border-primary rounded-lg"
                          required
                        />
                      </div>
                      <div className="form-control mt-2">
                        <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                          Contest ending time
                        </h1>
                        <input
                          type="text"
                          name="endTime"
                          className="grow w-full h-10 border-2 border-primary rounded-lg"
                          required
                        />
                      </div>
                      <div className="form-control mt-2">
                        <h1 className="input  input-sm w-full max-w-xs text-left bg-indigo-50 gap-2 text-xs md:text-base lg:text-lg">
                          Time Duration
                        </h1>
                        <input
                          type="text"
                          name="timeDuration"
                          className="grow w-full h-10 border-2 border-primary rounded-lg"
                          required
                        />
                      </div>
                      <div className=" flex items-center justify-center">
                        <button className="form-control   mt-4 btn btn-sm bg-[#7c8deb] text-white">
                          Start Countdown
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={resetTimer}
                      className="form-control   mt-4 btn btn-sm bg-[#7c8deb] text-white"
                    >
                      Reset Countdown
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
///defaultChecked
