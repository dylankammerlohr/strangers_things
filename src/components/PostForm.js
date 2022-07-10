import React from "react";

const PostForm = () => {

    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
        setChecked(!checked)
    }
  return (
    <form id='postForm'>
      <input id="title" placeholder="Title" />
      <input id="description" placeholder="Description" />
      <input id="price" placeholder="Price" />
      <input id="location" placeholder="Location" />
      <label>
        Deliver?
        <input id="deliver" type="checkbox" checked={checked} onChange={handleChange} placeholder="Deliver" />
      </label>
    </form>
  );
};

export default PostForm;
