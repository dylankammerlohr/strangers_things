import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts, registerPerson } from "../api";
import { Posts, Register } from "./";


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

  console.log(allPosts);
  return (
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/posts" element={<Posts allPosts={allPosts} />} />
      </Routes>

  );
}
