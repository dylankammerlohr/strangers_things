import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const MyMessages = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const userData = await getProfile(token);
    setMessages(userData.data.messages);
    setUser(userData.data._id);
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
            navigate("/profile/posts");
          }}
        >
          Posts
        </button>
      </div>
      <div>
        <h2 id="my-messages-title">Messages To Me</h2>
        {messages.map((message) => {
          return message.fromUser._id !== user ? (
            <div key={message._id} id="message-box">
              <h3>From: {message.fromUser.username}</h3>
              <p>Message: {message.content}</p>
              <p>Post: {message.post.title}</p>
            </div>
          ) : null;
        })}
      </div>
      <div>
        <h2 id="my-messages-title">Messages From Me</h2>
        {messages.map((message) => {
          return message.fromUser._id === user ? (
            <div key={message._id} id="message-box">
              <p>My Message: {message.content}</p>
              <p>Post: {message.post.title}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default MyMessages;
