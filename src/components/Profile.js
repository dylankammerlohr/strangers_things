import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState('')

 let token = localStorage.getItem("token");
 
 const getMyInfo = async () => {
      const userData = await getProfile(token);
      setMessages(userData.data.messages)
      setUser(userData.data._id)
      console.log(userData, "profile returned info");
      setMyInfo(userData);
    }
  useEffect(() => {
    getMyInfo();
  }, []);
  console.log(myInfo, 'myinfo')
  return (
    <div>
      {token ? <h2>Messages</h2> : <h2 className="profile-not-logged-in">Login/Register to view!</h2>}
        <div>
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