import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const History = () => {
  const { activities } = useContext(AppContext);

  return (
    <div>
      <h2>Activity History</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.activity}: {activity.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
