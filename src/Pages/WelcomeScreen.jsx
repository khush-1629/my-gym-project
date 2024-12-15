import React, { useContext } from "react";
import CircularProgress from "../components/CircularProgress";

import { AuthContext } from "../Context/AuthContext";

const WelcomeScreen = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to access this page.</p>;
  }

  const activities = [
    { name: "Running", calories: 300 },
    { name: "Cycling", calories: 200 },
  ];
  const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0);

  return (
    <div>
      <h1>Welcome to ActFour Fitness</h1>
      <p>Your goal: Burn calories and stay fit!</p>
      <CircularProgress value={totalCalories} maxValue={2000} text={`${totalCalories} cal`} />
    </div>
  );
};

export default WelcomeScreen;

  



