import actionTypes from "../../Data/actionTypes";

const INIT_STATE = [];
const busDataReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case actionTypes.SET_BUSDATA:
        return {
          ...state,
          INIT_STATE: action.payload,
        }; 
        
      default:
        return state;
    }
  };
  
  export default busDataReducer;