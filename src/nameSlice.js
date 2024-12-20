import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {
        name: "initial state",
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        },
    }
});

export const {addName} = nameSlice.actions;
export default nameSlice.reducer;    