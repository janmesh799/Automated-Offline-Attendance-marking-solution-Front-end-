import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css'
import AllCourses from '../components/AllCourses';
import SideIconTab from './SideIconTab';
import { getTeacherByAuthToken } from '../features/auth/authSlice';
import { setPage } from '../features/applicationData/applicationSlice';
import DashboardHeader from '../components/DashboardHeader';
import Attendance from '../components/Attendance';
import Profile from '../components/Profile';
import Setting from '../components/Setting';
// import store from "../store/store"


const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dashboardPage = useSelector((state) => state.application.dashboardPage)
    const { authToken } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(setPage('dashboard'))
        if (authToken) {
            dispatch(getTeacherByAuthToken());
        } else {
            navigate('/')
        }
    }, [authToken, navigate, dispatch])

    return (
        <div>
            <div className='All-Courses-Container'>
                <SideIconTab />
                <div style={{ display: "flex", flexDirection: "column", width: '95vw' }}>
                    <DashboardHeader />
                    {dashboardPage === "allcourses" && <AllCourses />}
                    {dashboardPage === 'attendance' && <Attendance />}
                    {dashboardPage === "profile" && <Profile />}
                    {dashboardPage === "setting" && <Setting />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard