import React from 'react';
import { NavLink } from 'react-router-dom'
import {Logout} from './'

const Navbar = ()=> {
    return (
    <nav>
        {localStorage.getItem('token') ? <Logout /> : null}
        <NavLink to="/posts" className='post-link'>Posts</NavLink>
        <NavLink to='/profile' className='profile-link'>Profile</NavLink>
        <NavLink to='/login-and-register' className='login-register-link'>Login/Register</NavLink>
        {/* <NavLink to="/register">Register</NavLink> */}
    </nav>
    )
}

export default Navbar