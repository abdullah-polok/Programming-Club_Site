import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Events = () => {
  const { problemCollections } = useContext(AuthContext);
  return (
    <div className="mt-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-300 to-blue-400 text-white">
      <div className="p-10 flex items-center justify-between ">
        <div>
          <h1 className="text-2xl">Weekly event</h1>
          <p className="text-base">Date:28-12-2024</p>
        </div>
        {problemCollections ? (
          <Link to="/problemset" className="btn btn-lg lg:btn-wide btn-Danger">
            Join
          </Link>
        ) : (
          <button disabled className="btn btn-lg lg:btn-wide btn-Danger">
            Join later
          </button>
        )}
      </div>
    </div>
  );
};

export default Events;
