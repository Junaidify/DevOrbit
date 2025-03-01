import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";


const reducer = combineReducers({
    
})

export const store = legacy_createStore(reducer, applyMiddleware(thunk))