import React, { useState } from "react";
import { v4 as uuid } from "uuid";

/** Reusable Post Form Component
 *
 * Can be utilized to edit/add data.
 */

const PostForm = ({ post, save, cancel }) => {
  // default post state located in defaultProps at bottom
  const [formData, setFormData] = useState({
    title: post.title,
    description: post.description,
    body: post.body,
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    save(formData);
  };

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label for="title">Title: </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="description">Description: </label>
          <input
            className="form-control"
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="body">Body: </label>
          <textarea
            onChange={handleChange}
            id="body"
            name="body"
            className="form-control"
            rows={10}
            value={formData.body}
          />
        </div>
        <button className="btn btn-primary mr-1">Save</button>
        <button onClick={cancel} className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;
