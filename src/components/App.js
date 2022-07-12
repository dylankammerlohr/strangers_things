import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPosts, registerPerson } from "../api";
import { Posts, Register, Navbar, Login, Profile, PostForm } from "./";


export default function App(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [token] = [props.token]
  async function fetchAllPosts() {
    try {
      const data = await getPosts();
      setAllPosts(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/profile' element={<Profile token = {token}/>}/>
        <Route path='/login-and-register' element={<div><Login /><Register /></div>}/>
        <Route path="/posts" element={<Posts allPosts={allPosts} token = {token}/>} />
        <Route path='/posts/add' element={<PostForm token = {token}/>}/>
        
      </Routes>
      </>
  );
}
