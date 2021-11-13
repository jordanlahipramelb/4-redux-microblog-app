import React from "react";
import PostForm from "./PostForm";

// redirect
import { useHistory } from "react-router-dom";

const NewPost = () => {
  const history = useHistory();

  /** Add Post */
  const addPost = ({ title, description, body }) => {
    history.push("/");
  };

  /** Cancel post and redirect to homepage */
  const cancel = () => history.push("/");

  return (
    <div className="container">
      <h1>New Post</h1>
      <PostForm addPost={addPost} cancel={cancel} />
    </div>
  );
};

export default NewPost;
