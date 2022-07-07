import React, {useState} from "react";
import { loginPerson } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    const token = loginPerson(username, password);
    localStorage.setItem("token", token);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          id="username"
          onChange={handleOnChange}
          value={username}
          placeholder="username"
        />

        <label>Password</label>
        <input 
        id="password" 
        onChange={handleOnChange} 
        value = {password}
        placeholder="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
