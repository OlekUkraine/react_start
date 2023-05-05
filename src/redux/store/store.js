import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carsReducer, commentReducer, userReducer} from "../slices";

const rootReducer = combineReducers({
    cars: carsReducer,
    users: userReducer,
    comments: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}