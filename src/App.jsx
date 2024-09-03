import { RouterProvider, useLocation } from "react-router-dom";
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
