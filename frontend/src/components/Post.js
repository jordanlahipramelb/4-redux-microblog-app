import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import PostView from "./PostView";
import PostForm from "./PostForm";
import CommentList from "./CommentList";

/** Post Component
 *
 * Parent for
 * - PostForm
 * - PostView
 * - CommentList -> Comment
 * - CommentForm
 */

const Post = () => {
  const history = useHistory();
  const postId = Number(useParams().postId);
  const [isEditing, setIsEditing] = useState(false);
  const post = useSelector((state) => state.posts[postId]);

  /** Toggles editing post on/off */

  const toggleEdit = () => {
    setIsEditing((editting) => !editting);
  };

  const edit = ({ title, body, description }) => {
    toggleEdit();
  };

  /** Handles deleting a post */

  const deletePost = () => {
    history.push("/");
  };

  /** Handles adding a comment */

  const addComment = (text) => {};

  /** Handles deleting a comment via id */

  const deleteComment = (id) => {};

  if (!post)
    return (
      <h2 className="text-center">
        <b>Loading...</b>
      </h2>
    );

  return (
    <div className="Post">
      {isEditing ? (
        //   displays of toggleEdit button is clicked
        <PostForm post={post} save={edit} cancel={toggleEdit} />
      ) : (
        <PostView post={post} toggleEdit={toggleEdit} deletePost={deletePost} />
      )}
      <div className="Post-comments mb-3">
        <h4>Comments</h4>
        <CommentList comments={post.comments} deleteComment={deleteComment} />
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Post;
