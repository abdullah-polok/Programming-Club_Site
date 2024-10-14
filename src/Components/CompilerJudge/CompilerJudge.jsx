import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Editor from "@monaco-editor/react";

const CompilerJudge = () => {
  // C++ and Java code snippets
  //   const snippets = {
  //     cpp: `#include <iostream>
  // using namespace std;

  // int main() {
  //     cout << "Hello, World! C++";
  //     return 0;
  // }`,
  //     java: `public class Main {
  //     public static void main(String[] args) {
  //         System.out.println("Hello, World! Java");
  //     }
  // }`,
  //   };

  const [input, setInput] = useState(localStorage.getItem("input") || "");

  const [languageId, setLanguageId] = useState(
    localStorage.getItem("language_Id") || 54
  );
  const [userInput, setUserInput] = useState("");
  const {
    user,
    outputCode,
    setOutputCode,
    codeLength,
    setCodeLength,
    countdownDate,
  } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  useEffect(() => {
    localStorage.setItem("language_Id", languageId);
  }, [languageId]);

  const handleInputChange = (value, event) => {
    // console.log(event.target.value);
    setInput(value);
  };
  const removeCode = () => {
    localStorage.setItem("input", "");
    setInput("");
  };
  const handleUserInputChange = (value, event) => {
    setUserInput(value);
  };

  const handleLanguageChange = (event) => {
    setLanguageId(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (languageId === 54) setCodeLength(input.length);
    const outputText = document.getElementById("output");
    outputText.innerHTML = "Creating Submission ...\n";

    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "x-rapidapi-key":
            "86f0b2e820msh52efceface10086p15274ejsn68d810d61b61",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          source_code: input,
          stdin: userInput,
          language_id: languageId,
        }),
      }
    );

    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "86f0b2e820msh52efceface10086p15274ejsn68d810d61b61",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }

    if (jsonGetSolution.stdout) {
      const output = atob(jsonGetSolution.stdout);
      outputText.innerHTML = `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
      const result = {
        result: output,
        time: jsonGetSolution.time,
        memory: jsonGetSolution.memory,
      };
      setOutputCode(result);
    } else if (jsonGetSolution.stderr) {
      const error = atob(jsonGetSolution.stderr);
      outputText.innerHTML = `\n Error :${error}`;
    } else {
      const compilationError = atob(jsonGetSolution.compile_output);
      outputText.innerHTML = `\n Error :${compilationError}`;
    }
  };
  // console.log("codeLength Output: ", codeLength);
  // console.log("Output: ", input.length);

  return (
    <div>
      <div className="flex flex-col md:flex-row m-3">
        <div className="w-full md:w-1/2 mb-2">
          <div className="flex justify-between mb-2 bg-slate-300 rounded p-2">
            <div className="w-1/4">
              <select
                value={languageId}
                onChange={handleLanguageChange}
                id="tags"
                className="form-select w-full"
              >
                <option value="54">C++</option>
                <option value="62">Java</option>
              </select>
            </div>
            <div className="flex space-x-2">
              {user && (
                <>
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                    onClick={removeCode}
                  >
                    Remove code
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                    onClick={handleSubmit}
                  >
                    Run
                  </button>
                </>
              )}
            </div>
          </div>
          <div className=" bg-slate-300 rounded p-4">
            {/* <textarea
              required
              name="solution"
              id="source"
              onChange={handleInputChange}
              className="w-full h-[600px] p-2"
              value={input}
              placeholder="Enter your code"
            ></textarea> */}
            <Editor
              required
              name="solution"
              id="source"
              value={input}
              onChange={handleInputChange}
              className="w-full h-[600px] p-2"
              theme="light" // Editor theme (e.g., "light", "vs-dark")
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col bg-slate-300 rounded p-4 md:ml-3">
          <div className="flex flex-col h-1/2">
            <label
              htmlFor="input"
              className=" bg-green-600 text-center text-white mb-2 rounded-sm"
            >
              Input
            </label>
            {/* <textarea
              className="form-control w-full h-3/4 p-2 rounded border"
              id="input"
              onChange={handleUserInputChange}
            ></textarea> */}
            <Editor
              className="form-control w-full h-3/4 p-2 rounded border"
              id="input"
              options={{
                lineNumbers: "off", // Disables line numbers
              }}
              onChange={handleUserInputChange}
              theme="light" // Editor theme (e.g., "light", "vs-dark")
            />
          </div>
          <div className="flex flex-col h-1/2">
            <label
              htmlFor="output"
              className="bg-green-600 text-center text-white mb-2 rounded-sm"
            >
              Output
            </label>
            <textarea
              className="form-control w-full h-3/4 p-2 rounded border"
              id="output"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerJudge;
