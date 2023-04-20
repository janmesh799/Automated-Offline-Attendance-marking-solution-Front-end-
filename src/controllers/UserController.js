import axios from 'axios';
// import { setState } from '../store/userSlice.js'
import creds from "../store/creds"
import { createAsyncThunk } from "@reduxjs/toolkit"

const HOST = creds.HOST;

export const LoginTeacher = createAsyncThunk(
    `api/teacher/login`, async (creds) => {
        try {
            const email = creds.email;
            const password = creds.password;
            const res = await axios.post(`${HOST}/api/teacher/login`, { email, password });
            // console.log(res.data)
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)

export const SignupTeacher = createAsyncThunk(
    `api/teacher/signup`, async (creds) => {
        try {
            const { email, password, name } = creds;
            const res = await axios.post(`${HOST}/api/teacher/createTeacher`, { name, email, password });
            return res.data;
        } catch (error) {
            console.log(error);
        }

    }
)

export const getTeacherByAuthToken = createAsyncThunk(
    'api/teacher/fetchTeacherbyAuthToken', async () => {
        try {
            const authToken = localStorage.getItem('authToken');
            // console.log("authToken in localstorage = ",authToken )
            const config = {
                headers: {
                    authToken:authToken
                }
            }
            // console.log(config)
            const res = await axios.get(`${HOST}/api/teacher/fetchTeacherbyAuthToken`, config);
            // console.log(res.data);
            return res.data;

        } catch (error) {
            console.log(error)

        }

    }
)