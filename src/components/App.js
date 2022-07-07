import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts } from "../api";
import { Posts } from "./";
export default function App() {
  const [allPosts, setAllPosts] = useState([]);

  async function fetchAllPosts() {
    try {
      const data = await getPosts();
      console.log(data);
      setAllPosts(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("this is your event", event);
    registerPerson(event);
    const backFromAPI = await registerPerson(event);
  }
  console.log(allPosts);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input id="username" placeholder="username"></input>
        <label>Password</label>
        <input id="password" placeholder="password"></input>
        <button>Login</button>
      </form>
      <Routes>
        <Route path="/posts" element={<Posts allPosts={allPosts} />} />
      </Routes>
    </>
  );
}
