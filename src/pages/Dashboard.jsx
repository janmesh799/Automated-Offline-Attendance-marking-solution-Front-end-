import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css'
import AllCourses from '../components/AllCourses';
import SideIconTab from './SideIconTab';
import { getTeacherByAuthToken } from '../features/auth/authSlice';
import { setPage } from '../features/applicationData/applicationSlice';
import DashboardHeader from '../components/DashboardHeader';
// import store from "../store/store"


const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authToken } = useSelector((state) => state.auth);

    // const logoutHandler = () => {
    //     localStorage.removeItem('authToken');
    //     navigate('/login')
    // }
    useEffect(() => {
        dispatch(setPage('allCourses'))
        if (authToken) {
            dispatch(getTeacherByAuthToken());
        } else {
            navigate('/')
        }

    }, [authToken, navigate, dispatch])

    return (
        <div>
            {

                // <button onClick={logoutHandler}>logout </button>
                // {JSON.stringify(user)}
            }
            <div className='All-Courses-Container'>
                {
                    //side Tab
                }
                <SideIconTab tab="allCourses" />
                {
                    // Main Content
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '95vw'
                }}>
                    <DashboardHeader title='Course' />
                    <AllCourses />
                </div>
            </div>
        </div>
    )
}

export default Dashboard