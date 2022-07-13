import React from "react";

const Logout = () => {
  async function logoutUser() {
    localStorage.removeItem("token");
    // window.location.reload(false);
  }

  return (
    <div className="logout">
      <button id="logout-button" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
