import {combineReducers} from "redux";
import addItemReducer from "./addItem";

export default combineReducers({
    add: addItemReducer,
})