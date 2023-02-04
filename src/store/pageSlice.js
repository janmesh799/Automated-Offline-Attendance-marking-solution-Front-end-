import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        activePage: "home"
    },
    reducers: {
        setState: (state, action) => {
            state.activePage = action.payload;
        }
    }
})

export const { setState } = pageSlice.actions;
export default pageSlice.reducer;