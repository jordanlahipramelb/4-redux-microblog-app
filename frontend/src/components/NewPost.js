import React from "react";
import PostForm from "./PostForm";
import { useDispatch } from "react-redux";

import "../css/NewPost.css";

// redirect
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";

/** A simple component that renders the PostForm
 * handles actually adding new posts into Redux. */

const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  /** Add Post */
  const addPost = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push("/");
  };

  /** Cancel post and redirect to homepage */
  const cancel = () => history.push("/");

  return (
    <div className="NewPostForm container">
      <h1>New Post</h1>
      <PostForm save={addPost} cancel={cancel} />
    </div>
  );
};

export default NewPost;
