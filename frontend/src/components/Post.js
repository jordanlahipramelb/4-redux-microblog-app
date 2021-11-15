import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../css/Post.css";

import PostView from "./PostView";
import PostForm from "./PostForm";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import {
  getPostFromAPI,
  removeCommentFromAPI,
  removePostFromAPI,
  sendCommentToAPI,
  sendVoteToAPI,
  updatePostInAPI,
} from "../actions/posts";

/** Post Component
 *
 * A component that gets the post data from Redux, and decides, from its own state, whether to show the edit form or the simple PostDisplay component.
 * This also handles editing, deleting, comment-adding, and comment-deleting.
 *
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
  const dispatch = useDispatch();

  /** Request post from API via postId */

  useEffect(() => {
    const getPost = async () => {
      dispatch(getPostFromAPI(postId));
    };

    // calls function if no post is present
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);

  /** Toggles editing post on/off */

  const toggleEdit = () => {
    setIsEditing((editting) => !editting);
  };

  /** Handles editing a post; updates in backend */

  const edit = ({ title, body, description }) => {
    dispatch(updatePostInAPI(postId, title, description, body));

    toggleEdit();
  };

  /** Handles deleting a post */

  const deletePost = () => {
    dispatch(removePostFromAPI(postId));

    history.push("/");
  };

  /** Handles adding a comment */

  const addComment = (text) => {
    dispatch(sendCommentToAPI(postId, text));
  };

  /** Handles deleting a comment via comment id */

  const deleteComment = (commentId) => {
    dispatch(removeCommentFromAPI(postId, commentId));
  };

  /** Handle voting in the backend */

  const vote = (direction) => {
    dispatch(sendVoteToAPI(postId, direction));
  };

  if (!post)
    return (
      <h2 className="text-center">
        <b>Loading...</b>
      </h2>
    );

  return (
    <div className="Post container">
      {/* Decide whether to show the edit form if toggleEdit is true, or the simple PostView component */}
      {isEditing ? (
        <PostForm post={post} save={edit} cancel={toggleEdit} />
      ) : (
        <PostView
          post={post}
          toggleEdit={toggleEdit}
          deletePost={deletePost}
          handleVote={vote}
        />
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
