import actionTypes from "../../Data/actionTypes";

export const setBusData = (dispatch,a) => {
    return dispatch({
        type: actionTypes.SET_BUSDATA,
        payload: a,
      });
    };