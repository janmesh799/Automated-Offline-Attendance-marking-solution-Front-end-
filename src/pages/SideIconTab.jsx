import React from 'react'

import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';
const SideIconTab = (props) => {
    const tab = props.tab;
    // const tab = "allCourses";
    return (
        <div>
            <div className='side-tab'>
                <div className='icon-tab'>
                    <div className='icon'>
                        <ImportContactsTwoToneIcon className={`icon-element${tab === 'allCourses' ? "-active" : ""}`} />
                        <CalendarMonthIcon className={`icon-element${tab === 'attendance' ? "-active" : ""}`} />
                        <Person4Icon className={`icon-element${tab === 'profile' ? "-active" : ""}`} />
                        <SettingsIcon className={`icon-element${tab === 'setting' ? "-active" : ""}`} />
                    </div>
                </div>
            </div></div>
    )
}

export default SideIconTab