import React, { useEffect, useRef, useState } from "react";
import CompilerJudge from "../../Components/CompilerJudge/CompilerJudge";

const Compiler = () => {
  // const iframeRef = useRef(null);
  // // Function to handle messages from the iframe
  // const handleMessage = (event) => {
  //   // Validate the origin of the message
  //   if (
  //     event.origin !==
  //     "https://www.programiz.com/java-programming/online-compiler/"
  //   )
  //     return;

  //   // Handle the message
  //   console.log("Message from iframe:", event.data);
  // };

  // useEffect(() => {
  //   // Add event listener for messages
  //   window.addEventListener("message", handleMessage);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);

  // const sendMessageToIframe = () => {
  //   if (iframeRef.current) {
  //     iframeRef.current.contentWindow.postMessage(
  //       "Requesting data",
  //       "https://www.programiz.com/java-programming/online-compiler/"
  //     );
  //   }
  // };
  return (
    <div>
      {/* <div class="iframe-container">
        <button className="btn" onClick={sendMessageToIframe}>
          Send Message to Iframe
        </button>
        <iframe
          ref={iframeRef}
          className="w-full h-screen"
          src="https://www.programiz.com/java-programming/online-compiler/"
          title="Programiz Online Compiler"
        ></iframe>
      </div> */}

      <div>
        <CompilerJudge></CompilerJudge>
      </div>
    </div>
  );
};

export default Compiler;
