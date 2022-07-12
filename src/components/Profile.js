import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api";

const Profile = () => {
  const [user, setUser] = useState("");

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const getMyInfo = async () => {
    const userData = await getProfile(token);
    setUser(userData.data.username);
  };
  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <div>
      {token ? (
        <div>
          <button
            type="button"
            id="profile-buttons"
            onClick={() => {
              navigate("/profile/posts");
            }}
          >
            Posts
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
          <h1 id="welcome-message">Welcome {user}!</h1>
        </div>
      ) : (
        <h2 className="profile-not-logged-in">Login/Register to view!</h2>
      )}
    </div>
  );
};

export default Profile;
