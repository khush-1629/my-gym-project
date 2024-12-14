import React, { useContext } from "react";
import CircularProgress from "../components/CircularProgress";
import { AppContext } from "../Context/AppContext";

const WelcomeScreen = () => {
  const { activities, userStats } = useContext(AppContext);
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
