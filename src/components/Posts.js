import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deletePost, getProfile, sendMessage } from '../api'
 
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

    console.log(allPosts[0], 'my post')

      const handleSubmit = async(event) =>{
        event.preventDefault()
        const token = localStorage.getItem('token')
        let postID = event.target.id
        let message = event.target[0].value
        sendMessage(token, postID, message)
        console.log(event.target[0].value,'button is working')
      }
    return(
        <div className="post-page">

            <div className="new-post-button">
                <button 
                type = 'button' 
                id = 'newPost'
                onClick = {() => {
                    navigate('/posts/add')
                }}>
                Add New Post</button>
            </div>

            <div className='posts'>
            {allPosts.map((post, index) => {
                return (
                    <div className='single-post' key = {index}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h4>Price: {post.price}</h4>
                        <h3>Seller: {post.author.username}</h3>
                        <h4>Location: {post.location}</h4>
                        {userId === post.author._id ? 
                        <div><button onClick={() => {const token = localStorage.getItem('token')
                        deletePost(token, post._id)}}>Delete Post</button></div>
                        : <div>
                            <form id={`${post._id}`}  onSubmit={handleSubmit}>
                            <input id='message' placeholder='Type Message Here'/>    
                            <button type='Submit'>Send</button>
                            </form>
                            </div>}
                    </div>
                )
            })}
            </div>
        </div>
    )

}

export default UserPost