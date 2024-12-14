export const calculateCalories = (weight, duration, activityFactor) => {
    // Formula: Calories burned = weight(kg) * duration(hr) * activityFactor
    return weight * duration * activityFactor;
  };
  