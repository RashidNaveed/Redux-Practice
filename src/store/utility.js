export const updateObject = (oldObject, updatedValues) => {
  // Always manipulates the state immutable means make copies of the old state
  // then update the copy and then save the results
  return {
    // copying object with spread operator
    ...oldObject,
    ...updatedValues,
  };
};
