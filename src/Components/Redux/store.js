import { legacy_createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Reducer } from "./Reducer";

export const newStore=()=>{
   return legacy_createStore(
    combineReducers({Reducer}),
    composeWithDevTools()
   )
}