import React, {useState} from "react";
import { newPost } from "../api";

const PostForm = () => {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }
    const handleSubmit = async(event) =>{
      event.preventDefault()
      console.log('this is event', event)
      newPost(event)
    }
  return (
    <div>
      {localStorage.getItem('token') ? <div><h3>Create New Post</h3>
      <form onSubmit={handleSubmit} className="postForm">
      <input id="title" placeholder="Title" />
      <input id="description" placeholder="Description" />
      <input id="price" placeholder="Price" />
      <input id="location" placeholder="Location" />
      <label>Deliver?
        <input id="deliver" type="checkbox" checked={checked} onChange={handleChange} placeholder="Deliver" />
      </label>
      <button type='Submit'>Submit Post</button>
    </form>
    </div> : <h2 className="profile-not-logged-in">Login/Register to post!</h2>}
    </div>
  );
};

export default PostForm;
