import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState('')
  const [post, setPost] = useState([])

 let token = localStorage.getItem("token");
 
 const getMyInfo = async () => {
      const userData = await getProfile(token);
      setMessages(userData.data.messages)
      setUser(userData.data._id)
      setPost(userData.data.posts)
      console.log(userData.data.posts, "profile returned info");
      setMyInfo(userData);
    }
  useEffect(() => {
    getMyInfo();
  }, []);
  console.log(myInfo, 'myinfo')
  console.log(post, 'post')
  return (
    <div>
      {token ? <h2>Activity</h2> : <h2 className="profile-not-logged-in">Login/Register to view!</h2>}
        <div>
          <h2>My Posts</h2>
          {post.map((post) => {
            return (post.active ? 
              <div className='single-post'>
                <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <h4>Price: {post.price}</h4>
                        <h4>Location: {post.location}</h4>
              </div>
            :null )
          })} 
        </div>
        <div>
        <h2>Messages To Me</h2>  
        {messages.map((message) => {
          return ( message.fromUser._id !== user ?
            <div key={message._id} id="message-box">
              <h3>From: {message.fromUser.username}</h3>
              <p>{message.content}</p>
              <p>Post: {message.post.title}</p>
            </div> : null 
          );
        })}
        </div>
        <div>
          <h2>Messages From Me</h2>
          {messages.map((message) => {
            return ( message.fromUser._id === user ?
              <div key={message._id} id="message-box">
             
                <p>{message.content}</p>
                <p>Post: {message.post.title}</p>
              </div> : null 
            );
          })}
        </div>
    </div>
  )
};

export default Profile;

{/* <div>
      {myInfo.data ? (
        <div>
          {myInfo.data.messages.map((message, index) => {
            return (
              <div key={index}>
                <h1>Message is here</h1>
                <p>{message._id}</p>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <div>hello</div>
      )}
    </div> */}