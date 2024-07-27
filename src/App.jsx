import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";
import Header from "./Components/Headers/Navbar";
import router from "./RouterProvider/Router";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-3">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
