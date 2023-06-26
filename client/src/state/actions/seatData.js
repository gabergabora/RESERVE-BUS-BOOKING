import actionTypes from "../../Data/actionTypes";

export const setSeatData=(dispatch,a) =>{
    return dispatch({
        type:actionTypes.SET_SEATDATA,
        payload:a
    });
}