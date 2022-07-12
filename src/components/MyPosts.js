import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const MyPosts = () => {
  const [post, setPost] = useState([]);

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const userData = await getProfile(token);
    setPost(userData.data.posts);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <div>
      <div id="buttons">
        <button
          type="button"
          id="profile-buttons"
          onClick={() => {
            navigate("/profile/");
          }}
        >
          Profile
        </button>
        <button
          type="button"
          id="profile-buttons"
          onClick={() => {
            navigate("/profile/messages");
          }}
        >
          Messages
        </button>
      </div>
      <div id="profile-box">
        <h2 id="my-post-title">My Posts</h2>
        {post.map((post) => {
          return post.active ? (
            <div className="profile-posts">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <h4>Price: {post.price}</h4>
              <h4>Location: {post.location}</h4>
            </div>
          ) : null;
        })}{" "}
      </div>
    </div>
  );
};

export default MyPosts;
