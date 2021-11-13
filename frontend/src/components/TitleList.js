import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TitleList = () => {
  const titles = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading)
    return (
      <h2 className="text-center">
        <b>Loading...</b>
      </h2>
    );

  // if either side is true, return this
  if (!isLoading && titles.length === 0) {
    return (
      <h2 className="text-center">
        <b>Please add a post!</b>
      </h2>
    );
  }

  return (
    <div className="row">
      {titles.map((title) => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={"/" + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
              <div className="card-footer">
                <i className="fas fa-thumbs-up text-success ml-2" />
                <i className="fas fa-thumbs-down text-danger ml-2" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleList;
