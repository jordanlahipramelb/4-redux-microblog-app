import React from "react";
import "../css/PostView.css";

/** Render a Single Post
 *
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

const PostView = ({ post, toggleEdit, deletePost, handleVote }) => {
  const { title, description, body, votes } = post;

  return (
    <div className="PostView container">
      <div>
        <h2>{title}</h2>
        <p>
          <i>{description}</i>
        </p>
        <div>{body}</div>
      </div>
      <div className="PostView-right">
        <div className="PostView-editArea">
          <i className="fas fa-edit text-primary" onClick={toggleEdit} />
          <i className="fas fa-times text-danger" onClick={deletePost} />
        </div>
        <div className="PostView-votes">
          <b>{votes} votes:</b>

          <i
            className="fas fa-thumbs-up text-success"
            onClick={() => handleVote("up")}
          />
          <i
            className="fas fa-thumbs-down text-danger"
            onClick={() => handleVote("down")}
          />
        </div>
      </div>
    </div>
  );
};

export default PostView;
