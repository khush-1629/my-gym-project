export const stepsToCalories = (steps, weight) => {
    const caloriesPerStep = 0.05 * weight / 70; // Adjust for average weight
    return steps * caloriesPerStep;
  };
  