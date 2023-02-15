import { legacy_createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { NewReducer } from "./Reducer";


export const newStore=()=>{
    return( 
        legacy_createStore(combineReducers({NewReducer}),composeWithDevTools())
    );
};