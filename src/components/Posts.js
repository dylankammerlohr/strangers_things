import React from 'react'

 
const UserPost = ({getPost}) => {
   
    return(
        <div className="posts">
            <h2>{getPost}</h2>
        </div>
    )

}

export default UserPost