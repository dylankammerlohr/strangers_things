import React, { useState, useEffect } from "react";
import { getProfile } from "../api";

const Profile = () => {
  const [myInfo, setMyInfo] = useState({});

 let token = localStorage.getItem("token");

  useEffect(() => {
    const getMyInfo = async () => {
      const userData = await getProfile(token);
      console.log(userData, "profile returned info");
      setMyInfo(userData);
      console.log(userData.data, 'userData.data.')
      console.log(userData.messages, 'userdata.messages')
    }
    getMyInfo();
  }, []);
  console.log(myInfo.data.messages, 'myinfo.messages')
  return (
    <div>
        <h1>Messages</h1>
        {myInfo.data ? 
        <div>
        {myInfo.data.messages.map((message) => {
          return (
            <div key={message._id}>
              <h1>Message is here</h1>
              <p>{message}</p>
            </div>
          );
        })} </div> : null }
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