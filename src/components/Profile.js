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
      console.log(userData.messages, 'myInfo.data.messages')
    }
    getMyInfo();
  }, []);
  console.log(myInfo.data, 'myinfo.data')
  return (
    <div>
        <h1>Messages</h1>
        {myInfo._id ? 
        <div>
            {myInfo.messages.map((element) => {
            return (
              <div key={element._id}>
                <h1>Message is here</h1>
                <p>message: {element}</p>
              </div>
            );
          })}
        </div>:
        <div>there is no data</div>}
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