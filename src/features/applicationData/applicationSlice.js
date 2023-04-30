import { createSlice } from "@reduxjs/toolkit";
// import applicationService from "./applicationService"

const initialState = {
    page: null,
    dashboardPage: null

}

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setDashboardPage: (state, action) => {
            state.dashboardPage = action.payload
        }
    },
    extraReducers: () => {

    }

})

export const { setPage, setDashboardPage } = applicationSlice.actions;
export default applicationSlice.reducer;