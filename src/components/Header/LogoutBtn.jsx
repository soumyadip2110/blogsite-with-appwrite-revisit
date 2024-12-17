import React from 'react'
import {useDispatch} from 'react-redux'
import {logOut} from '../../store/authSlice.js'
import authService from '../../appwrite/auth.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logOut());
        });
    }
    
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn