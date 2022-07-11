import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deletePost, getProfile } from '../api'
 
const UserPost = ({allPosts}) => {
//    console.log(allPosts, 'all posts in post comp')
    const [userId, setUserId]= useState('')

    const getUserId = async () => {
        const token = localStorage.getItem('token')
        const userData = await getProfile(token);
        const userID = userData.data._id
        console.log(userData, "userdata");
        setUserId(userID);
      }
      useEffect(() => {
        getUserId();
      }, []);


    let navigate = useNavigate()


    console.log(allPosts[52], 'my post')

    
    return(
        
        <div className="post page">

            <div>
                <button 
                type = 'button' 
                id = 'newPost'
                onClick = {() => {
                    navigate('/posts/add')
                }}>
                Add New Post</button>
            </div>

            <section className='posts'>
            {allPosts.map((post, index) => {
                return (
                    <div className='single-post' key = {index}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h4>{post.price}</h4>
                        <h3>Seller: {post.author.username}</h3>
                        <h4>{post.location}</h4>
                        {userId === post.author._id ? 
                        <div><button onClick={() => {const token = localStorage.getItem('token')
                        deletePost(token, post._id)}}>Delete Post</button></div>
                        : null}
                    </div>
                )
            })}
            </section>
        </div>
    )

}

export default UserPost