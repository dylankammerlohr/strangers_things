import React from 'react'

 
const UserPost = ({allPosts}) => {
   console.log(allPosts, 'all posts in post comp')
    return(
        <div className="postss">
            {allPosts.map((post) => {
                return (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h4>{post.price}</h4>
                        <h3>Seller: {post.author.username}</h3>
                        <h4>{post.location}</h4>
                    </div>
                )
            })}
        </div>
    )

}

export default UserPost