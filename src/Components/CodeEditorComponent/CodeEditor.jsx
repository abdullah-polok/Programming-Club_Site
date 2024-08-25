// src/CodeEditor.js
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import axios from "axios";

const snippets = {
  Java: `public class Main {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`,
  Cpp: `#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
};

const CodeEditor = () => {
  const [code, setCode] = useState(snippets.Java); // Default snippet for Java
  const [language, setLanguage] = useState("Java"); // Default language
  const [input, setInput] = useState(""); // Input for the code
  const [output, setOutput] = useState(""); // Compilation output
  const [error, setError] = useState(""); // Error message

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setCode(snippets[selectedLanguage] || ""); // Load snippet based on selected language
    setOutput("");
  };

  const handleRun = async () => {
    // console.log("Sending data:", { code: code, lang: language, input: input });

    try {
      const result = await axios.post("http://localhost:8000/submit", {
        code: code,
        lang: language,
        input: input,
      });

      if (result.data.error) {
        setError(result.data.error);
        setOutput("");
      } else {
        setOutput(result.data.output); // Set the output received from the server
        setError("");
      }
    } catch (error) {
      console.error("Error compiling code:", error);
      setError("An error occurred while compiling the code.");
    }
  };

  const getMode = () => {
    switch (language) {
      case "Cpp":
        return cpp();
      case "Java":
        return java();
    }
  };
  console.log("Output", output);
  return (
    <div className="flex flex-col md:flex-row m-3">
      <div className="w-full md:w-1/2 mb-2">
        <div className="flex justify-between mb-2 bg-gray-800 rounded p-2">
          <div className="w-1/4">
            <label htmlFor="inlineFormSelectPref" className="sr-only">
              Preference
            </label>
            <select
              className="form-select w-full"
              id="inlineFormSelectPref"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="Java">Java</option>
              <option value="Cpp">Cpp</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              id="run"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              onClick={handleRun}
            >
              RUN
            </button>
          </div>
        </div>
        <CodeMirror
          value={code}
          extensions={[getMode()]}
          height="400px"
          onChange={(value) => setCode(value)}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col bg-gray-800 rounded p-4 md:ml-3">
        <div className="flex flex-col h-1/2 mb-4">
          <label htmlFor="input" className="text-gray-300 mb-2">
            Input
          </label>
          <textarea
            id="input"
            className="form-control w-full h-full p-2 rounded border"
            aria-label="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col h-1/2">
          <label htmlFor="output" className="text-gray-300 mb-2">
            Output
          </label>
          <textarea
            id="output"
            className="form-control w-full h-full p-2 rounded border"
            aria-label="Output"
            value={output}
            readOnly
          ></textarea>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CodeEditor;
