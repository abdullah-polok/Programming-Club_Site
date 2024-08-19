const COMPILE_X_API_URL = "http://localhost:5173/compiler";

const CompileCode = async (language, code) => {
  try {
    const response = await fetch(COMPILE_X_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "YOUR_API_KEY", // Replace with your API key if required
      },
      body: JSON.stringify({
        language,
        code,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error compiling code:", error);
    throw error;
  }
};

export default CompileCode;
