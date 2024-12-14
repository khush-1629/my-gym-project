import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [userStats, setUserStats] = useState({
    weight: 75, // kg
    height: 180, // cm
  });

  const addActivity = (activity) => {
    setActivities((prev) => [...prev, activity]);
    localStorage.setItem("activities", JSON.stringify([...activities, activity]));
  };

  return (
    <AppContext.Provider value={{ activities, userStats, setUserStats, addActivity }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
