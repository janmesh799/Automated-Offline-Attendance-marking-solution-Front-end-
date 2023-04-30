import axios from 'axios'

// const API_URL = 'http://localhost:5000/api/'
const API_URL = 'https://upasthit-backend.vercel.app/api/'

//register user
const signup = async (userData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post(API_URL + "teacher/createTeacher", userData, config);
        // console.log(response)
        return response.data
    } catch (err) {
        throw new Error(err.message)
    }
}

//login user
const login = async (userData) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post(API_URL + 'teacher/login', userData, config)
        return response.data
    } catch (err) {
        throw new Error(err.message)
    }

}

const getTeacherByAuthToken = async () => {
    try {
        console.log("auth token in local storafe = ", localStorage.getItem('authToken'))
        const config = {
            headers: {
                "Content-Type": "application/json",
                "authToken": localStorage.getItem('authToken')
            }
        }
        const response = await axios.get(API_URL + 'teacher/fetchTeacherbyAuthToken', config);
        return response.data;
    }
    catch (err) {
        throw new Error(err.message)
    }
}

//logout user
const logout = async () => {
    localStorage.removeItem('user')
}
const authService = {
    signup,
    logout,
    login,
    getTeacherByAuthToken
}

export default authService