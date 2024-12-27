import { combineReducers, createReducer, createStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;