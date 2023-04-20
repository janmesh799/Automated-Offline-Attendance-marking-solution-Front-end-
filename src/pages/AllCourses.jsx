import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { getTeacherByAuthToken } from '../controllers/UserController';
import './AllCourses.css'
// import store from "../store/store"

const AllCourses = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    // console.log("user = ", user);
    const logoutHandler = () => {
        localStorage.removeItem('authToken');
        navigate('/login')
    }
    useEffect(() => {
        dispatch(getTeacherByAuthToken());
    }, [])


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
                <div className='side-tab'>
                    <div className='icon-tab'>
                    <div className='icon'>
                    <ImportContactsTwoToneIcon />
                    </div>
                    </div>
                </div>
                {
                    // Main Content
                }
                <div>

                </div>
            </div>
        </div>
    )
}

export default AllCourses