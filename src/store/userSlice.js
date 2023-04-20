import { createSlice } from "@reduxjs/toolkit"
import { LoginTeacher, SignupTeacher } from "../controllers/UserController";
import { getTeacherByAuthToken } from "../controllers/UserController";
// import { useForm } from 'react-hook-form';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        islogged: false,
        name: "",
        email: "",
        authToken: ""
    },
    reducers: {
        // Reducer comes here
    },
    extraReducers(builder) {
        builder.addCase(LoginTeacher.pending, (state, action) => {
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
        })
        builder.addCase(LoginTeacher.fulfilled, (state, action) => {
            if (action.payload.success === false) {
                state.islogged = false;
                state.name = "";
                state.email = "";
                state.authToken = "";
                localStorage.removeItem('authToken');
            }
            else {
                state.islogged = true;
                state.name = action.payload.loggedInTeacher.name;
                state.email = action.payload.loggedInTeacher.email;
                state.authToken = action.payload.authToken;
                localStorage.setItem('authToken', state.authToken);
                // console.log("authToken in localstorage = ", localStorage.getItem('authToken'))
            }
        })
        builder.addCase(LoginTeacher.rejected, (state, action) => {
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
            localStorage.removeItem('authToken');
        })
        builder.addCase(getTeacherByAuthToken.pending, (state, action) => {
            // console.log(action)
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
        })
        builder.addCase(getTeacherByAuthToken.fulfilled, (state, action) => {
            // console.log(action)
            if (action.payload.success === false) {
                state.islogged = false;
                state.name = "";
                state.email = "";
                state.authToken = "";
                localStorage.removeItem('authToken');
            } else {
                state.islogged = true;
                state.name = action.payload.teacher.name;
                state.email = action.payload.teacher.email;
                state.authToken = action.payload.authToken;
                localStorage.setItem('authToken', action.payload.authToken);
            }
        })
        builder.addCase(getTeacherByAuthToken.rejected, (state, action) => {
            // console.log(action)
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
            localStorage.removeItem('authToken');
        })
        builder.addCase(SignupTeacher.pending, (state, action) => {
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
        })
        builder.addCase(SignupTeacher.fulfilled, (state, action) => {
            if (action.payload.success === false) {
                state.islogged = false;
                state.name = "";
                state.email = "";
                state.authToken = "";
                localStorage.removeItem('authToken');
            }
            else {
                state.islogged = true;
                state.authToken = action.payload.authToken;
                localStorage.setItem('authToken', action.payload.authToken);
            }
        })
        builder.addCase(SignupTeacher.rejected, (state, action) => {
            state.islogged = false;
            state.name = "";
            state.email = "";
            state.authToken = "";
            localStorage.removeItem('authToken');
        })
    }

})
export const { setUserLogin } = userSlice.actions;
export default userSlice.reducer;