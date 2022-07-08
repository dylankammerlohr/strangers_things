import React from 'react'

const Logout = () => {
    const handleOnClick = async() => {
        console.log(localStorage.getItem('token'))
        localStorage.removeItem("token");
        
    };
   
    return(
        <div className='logout'>
            <button type = 'button'
            id = 'temp'
            onClick = {handleOnClick}>Logout</button>
        </div>
    )
}

export default Logout