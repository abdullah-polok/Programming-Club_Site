import React, { useState } from "react";
import database from "../../firebase";
const Admin = () => {
  const [teamName, setTeamName] = useState("");
  const [score, setScore] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const scoresRef = database.ref("scores");
    const newScore = {
      teamName,
      score: Number(score),
    };
    scoresRef.push(newScore);
    setTeamName("");
    setScore("");
  };
  return (
    <div>
      <div className="text-4xl font-bold bg-indigo-300 text-white text-center">
        <h1>Live Score</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">Update Score</button>
      </form>
    </div>
  );
};

export default Admin;
