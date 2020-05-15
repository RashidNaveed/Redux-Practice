import * as actionType from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionType.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldState = getState().counter;
      console.log(oldState);
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const deleteResult = (value) => {
  return {
    type: actionType.DELETE_RESULT,
    deleteResultId: value,
  };
};
