import React, { useState } from "react";

/** Renders Comment Form
 *
 * Used for adding/editing a comment.
 */

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addComment(comment);
    setComment("");
  };

  /** Allows form to be used */
  const handleChange = (evt) => {
    setComment(evt.target.value);
  };

  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          size="40"
          placeholder="New Comment"
          className="form-control"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default CommentForm;
