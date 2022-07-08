import React from 'react';
import {NavLink} from 'react-router-dom'
import {Logout} from './'
const Navbar = ()=> {
    return (
    <nav>
        {localStorage.getItem('token') ? <Logout /> : <Logout/>}
        <NavLink to='/login'>Login</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to="/register">Register</NavLink>
    </nav>
    )
}

export default Navbar