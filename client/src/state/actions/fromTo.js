import actionTypes from "../../Data/actionTypes";

export const setFromTo = (dispatch,a) => {
    return dispatch({
        type: actionTypes.SET_FROM_TO,
        payload: a,
      });
};