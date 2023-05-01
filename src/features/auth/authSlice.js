import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

//Get authToken from local storage
const authToken = localStorage.getItem('authToken') || null;

const initialState = {
    authToken: authToken ? authToken : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    user: null
}

//resgister user
export const signup = createAsyncThunk('auth/signup', async (user, thunkAPI) => {
    try {

        const response = await authService.signup(user)
        if (response.success === true) return response;
        else {
            throw new Error(response.message);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await authService.login(user);
        if (response.success === true) return response;
        else {
            throw new Error(response.message);
        }
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})


export const getTeacherByAuthToken = createAsyncThunk('auth/getTeacherByAuthToken', async (thunkAPI) => {
    try {
        const response = await authService.getTeacherByAuthToken();
        if (response.success === true) return response;
        else {
            throw new Error(response.message);
        }

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || (error.message) || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.authToken = null
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true

            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                state.authToken = action.payload.authToken
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true

            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('authToken', action.payload.authToken)
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload.loggedInTeacher
                state.authToken = action.payload.authToken
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(getTeacherByAuthToken.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTeacherByAuthToken.fulfilled, (state, action) => {
                if (action.payload.success === true) {
                    state.user = action.payload.teacher
                }
                else {
                    localStorage.removeItem('authToken')
                    state.user = null
                    state.isError = true
                    state.message = "login again to continue"
                }
                state.isLoading = false

            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer