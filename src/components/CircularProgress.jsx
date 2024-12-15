import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const CircularProgress = ({ value, maxValue, text }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <CircularProgressbar
      value={percentage}
      text={text}
      styles={buildStyles({
        textColor: "#000",
        pathColor: "#3e98c7",
        trailColor: "#d6d6d6",
      })}
    />
  );
};

export default CircularProgress;
