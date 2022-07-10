import React from 'react'
import {Navigate} from 'react-router-dom'
 
const UserPost = ({allPosts}) => {
   console.log(allPosts, 'all posts in post comp')

//    const createPostPage = (event) => {
//     event.preventDefault()
//     <Navigate to='/posts/add' replace={true}/>
//    }

    return(
        
        <div className="post page">

            <div>
                <button 
                type = 'button' 
                id = 'newPost'
                onClick = {createPostPage}>
                Add New Post</button>
            </div>

            <section className='posts'>
            {allPosts.map((post, index) => {
                return (
                    <div key = {index}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h4>{post.price}</h4>
                        <h3>Seller: {post.author.username}</h3>
                        <h4>{post.location}</h4>
                    </div>
                )
            })}
            </section>
        </div>
    )

}

export default UserPost