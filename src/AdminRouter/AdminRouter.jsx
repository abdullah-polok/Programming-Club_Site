import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const AdminRouter = ({ children }) => {
  const { user, loading, profileData } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="flex w-52 flex-col gap-4 ">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  ///Check user have or not
  if (user && profileData.role == "admin") {
    return children;
  }
  // return <Navigate to={"/"}></Navigate>;
};

export default AdminRouter;
