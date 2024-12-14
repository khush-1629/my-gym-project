import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const LogActivity = () => {
  const { addActivity } = useContext(AppContext);
  const [activity, setActivity] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity && calories) {
      addActivity({ activity, calories: parseInt(calories, 10) });
      setActivity("");
      setCalories("");
    }
  };

  return (
    <div>
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Activity Name"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default LogActivity;
