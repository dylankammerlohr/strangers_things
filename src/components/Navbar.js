import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = ()=> {
    return (
    <header>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to="/register">Register</NavLink>
    </header>
    )
}

export default Navbar