import actionTypes from "../../Data/actionTypes";

export const setUserDetails = (dispatch,a) => {
    return dispatch({
        type: actionTypes.SET_USER_DETAILS,
        payload: a,
      });
    };