import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialState = {
  results: [],
};

// Always manipulates the state immutable means make copies of the old state
// then update the copy and then save the results
// here we can use the push() method to add values in array but it manipulates the orignal array
// the concat() method will return a new array which is old array plus the arrgument you add in it
// here we can also use array.splice() to delte an element from array but it manipulates the original array
// But array.filter() returns a copy of array and delete the element if condition is met

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.deleteResultId
  );
  return updateObject(state, { results: updatedArray });
};

const resultReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });

    case actionType.DELETE_RESULT:
      return deleteResult();
    default:
      return state;
  }
};
export default resultReducer;
