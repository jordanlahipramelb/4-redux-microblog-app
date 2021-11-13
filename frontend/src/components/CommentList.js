import React from "react";
import Comment from "./Comment";

/** Renders list of comments
 *
 * Comments are passed down from props.
 * Renders Comment components.
 *
 * deleteComment function passed down from Post component
 */

const CommentList = ({ comments = [], deleteComment }) => {
  return comments.map((comment) => (
    <Comment
      key={comment.id}
      id={comment.id}
      text={comment.text}
      deleteComment={deleteComment}
    />
  ));
};

export default CommentList;
