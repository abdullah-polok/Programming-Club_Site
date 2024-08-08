import { RouterProvider } from "react-router-dom";
import Navbar from "./Components/Headers/Navbar";
import Header from "./Components/Headers/Navbar";
import router from "./RouterProvider/Router";
import AuthProvider from "./AuthProvider/AuthProvider";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-3">
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
