import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Setting = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(reset());
        dispatch(logout())
        navigate('/')
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
            <Button onClick={logoutHandler} color='error' variant='contained' size='large' >Logout</Button>
        </div>
    )
}

export default Setting