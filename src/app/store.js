import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import applicationReducer from "../features/applicationData/applicationSlice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
        application: applicationReducer
    },
});
