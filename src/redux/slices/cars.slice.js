import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    pageReload: null
}

const slice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars:(state, action) => {
            state.cars = action.payload;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        rebootPage:(state) => {
            state.pageReload = !state.pageReload;
        }
    }
});

const {reducer:carsReducer, actions} = slice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}