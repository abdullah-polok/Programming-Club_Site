import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";
import Header from "./Components/Headers/Navbar";
import router from "./RouterProvider/Router";

function App() {
  return (
    <>
      <div className="max-w-8xl mx-auto px-10">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
