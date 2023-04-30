import React from 'react'

import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { setDashboardPage } from '../features/applicationData/applicationSlice';
const SideIconTab = () => {

    const dashboardPage = useSelector((state) => state.application.dashboardPage);
    const dispatch = useDispatch();
    return (
        <div>
            <div className='side-tab'>
                <div className='icon-tab'>
                    <div className='icon'>
                        <ImportContactsTwoToneIcon onClick={() => { dispatch(setDashboardPage("allcourses")) }} className={`icon-element${dashboardPage === 'allcourses' ? "-active" : ""}`} />
                        <CalendarMonthIcon onClick={() => { dispatch(setDashboardPage("attendance")) }} className={`icon-element${dashboardPage === 'attendance' ? "-active" : ""}`} />
                        <Person4Icon onClick={() => { dispatch(setDashboardPage("profile")) }} className={`icon-element${dashboardPage === 'profile' ? "-active" : ""}`} />
                        <SettingsIcon onClick={() => { dispatch(setDashboardPage("setting")) }} className={`icon-element${dashboardPage === 'setting' ? "-active" : ""}`} />
                    </div>
                </div>
            </div></div>
    )
}

export default SideIconTab