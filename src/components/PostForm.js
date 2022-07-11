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
    <form id='postForm' onSubmit={handleSubmit}>
      <input id="title" placeholder="Title" />
      <input id="description" placeholder="Description" />
      <input id="price" placeholder="Price" />
      <input id="location" placeholder="Location" />
      <label>Deliver?
        <input id="deliver" type="checkbox" checked={checked} onChange={handleChange} placeholder="Deliver" />
      </label>
      <button type='Submit'>Submit Post</button>
    </form>
  );
};

export default PostForm;
