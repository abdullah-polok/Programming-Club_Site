import React, { useState } from "react";
import axios from "axios";
const Admin = () => {
  const [uid, setUid] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/admin", {
        uid,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error setting admin role");
    }
  };
  return (
    <div>
      <h1 className="text-center">Set Admin Role</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <div>
            <label>
              User UID:
              <input
                className="border-2 rounded-lg mx-2 mt-2"
                type="text"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="mt-2">
            <button className="btn btn-sm btn-primary" type="submit">
              Set Admin
            </button>
          </div>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Admin;
