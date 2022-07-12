import React from 'react'

const Logout = () => {
    async function logoutUser(){
        console.log(localStorage.getItem('token'))
        localStorage.removeItem('token');
        window.location.reload(false)
    };
   
    return(
        <div className='logout'>
            <button id = 'logout-button'
            onClick = {logoutUser}>Logout</button>
        </div>
    )
}

export default Logout