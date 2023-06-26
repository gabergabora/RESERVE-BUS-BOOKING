import actionTypes from "../../Data/actionTypes";

const INIT_STATE = [];
const seatDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case actionTypes.SET_SEATDATA:
        return {
          ...state,
          INIT_STATE: action.payload,
        }; 
        
      default:
        return state;
    }
  };
  export default seatDataReducer;