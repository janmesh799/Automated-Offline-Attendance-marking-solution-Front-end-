import { configureStore } from '@reduxjs/toolkit'
import pageReducer from "./pageSlice"
import { userSlice } from './userSlice'

export const store = configureStore({
    reducer: {
        page: pageReducer,
        user: userSlice.reducer,
    },
})