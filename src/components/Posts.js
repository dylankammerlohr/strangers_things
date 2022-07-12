import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deletePost, getProfile, sendMessage } from "../api";

const UserPost = ({ allPosts }) => {
  const [userId, setUserId] = useState("");
  // const [posts, setPosts] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')

  // function postSearch(post, text){
  //     let text = setSearchTerm.includes()
  //     let match = false
  //     return match
  // }

  const getUserId = async () => {
    const token = localStorage.getItem("token");
    const userData = await getProfile(token);
    const userID = userData.data._id;
    setUserId(userID);
  };
  useEffect(() => {
    getUserId();
  }, []);

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    let postID = event.target.id;
    let message = event.target[0].value;
    sendMessage(token, postID, message);
  };
  return (
    <div className="post-page">
      <div className="search-input">
        <input placeholder="Search" />
      </div>
      <div className="new-post-button">
        <button
          type="button"
          id="newPost"
          onClick={() => {
            navigate("/posts/add");
          }}
        >
          Add New Post
        </button>
      </div>

      <div className="posts">
        {allPosts.map((post, index) => {
          return (
            <div className="single-post" key={index}>
              <h2 id="post-title">{post.title}</h2>
              <p id="post-description">{post.description}</p>
              <h4 id="post-price">Price: {post.price}</h4>
              <h3 id="post-seller">Seller: {post.author.username}</h3>
              <h4 id="post-location">Location: {post.location}</h4>
              {localStorage.getItem("token") ? (
                userId === post.author._id ? (
                  <div>
                    <button
                      id="delete-button"
                      onClick={() => {
                        const token = localStorage.getItem("token");
                        deletePost(token, post._id);
                      }}
                    >
                      Delete Post
                    </button>
                  </div>
                ) : (
                  <div className="new-message">
                    <form id={`${post._id}`} onSubmit={handleSubmit}>
                      <input
                        id="message-input"
                        placeholder="Type Message Here"
                      />
                      <button id="message-button" type="Submit">
                        Send
                      </button>
                    </form>
                  </div>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPost;
