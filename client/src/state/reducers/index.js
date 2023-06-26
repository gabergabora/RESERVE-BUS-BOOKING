import { combineReducers } from "redux";
import busDataReducer from "./busData";
import fromToReducer from "./fromTo";
import seatDataReducer from "./seatData";
import userDetailsReducer from "./userDetails";

//Main Reducer...
const rootReducer = combineReducers ({
    seatData:seatDataReducer,
    busData: busDataReducer,
    fromTo:fromToReducer,
    userDetails:userDetailsReducer
})

export default rootReducer;