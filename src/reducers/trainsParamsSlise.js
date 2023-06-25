import { createSlice } from "@reduxjs/toolkit";
import { sortByTime, sortByPrice, sortByDuration } from "../service/dataTransform";
import { makeArgs } from "../service/dataTransform";

const initialState = {
    trainsList: [],
    printTrainsList: [],
    request: ''
};


const trainsParamsSlice = createSlice({
    name: "trainsParams",
    initialState,
    reducers: {
        setTrainsResult: (prevState, action) => ({
            ...prevState,
            trainsList: action.payload,
            printTrainsList: sortByTime(action.payload.items)
        }),
    }
});

export const { setTrainsResult,
} = trainsParamsSlice.actions;
export default trainsParamsSlice.reducer;