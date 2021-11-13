import React from "react";

/** Renders single comment
 *
 * Can be deleted via id with function passed down
 * from main parent Post -> CommentList -> Comment.
 * Displays text.
 */

const Comment = ({ id, text, deleteComment }) => {
  const handleDelete = () => {
    deleteComment(id);
  };

  return (
    <div className="Comment">
      <p>
        {deleteComment && (
          <i className="fa fa-times text-danger mr-2" onClick={handleDelete} />
        )}

        {text}
      </p>
    </div>
  );
};

export default Comment;
