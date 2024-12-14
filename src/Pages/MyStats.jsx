import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyStats = () => {
  const { userStats, setUserStats } = useContext(AppContext);

  const handleWeightChange = (e) => {
    setUserStats({ ...userStats, weight: e.target.value });
  };

  const handleHeightChange = (e) => {
    setUserStats({ ...userStats, height: e.target.value });
  };

  return (
    <div>
      <h2>My Stats</h2>
      <label>
        Weight (kg):
        <input
          type="number"
          value={userStats.weight}
          onChange={handleWeightChange}
        />
      </label>
      <label>
        Height (cm):
        <input
          type="number"
          value={userStats.height}
          onChange={handleHeightChange}
        />
      </label>
    </div>
  );
};

export default MyStats;
