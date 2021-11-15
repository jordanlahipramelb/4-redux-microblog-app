import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../css/TitleList.css";

/** Async functions from action creator */
import { fetchTitlesFromAPI } from "../actions/titles";
import { sendVoteToAPI } from "../actions/posts";

/** The component rendered on the homepage that lists the post title/description links. */

const TitleList = () => {
  // Retrieve titles state from store in root reducer
  const titles = useSelector((state) => state.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTitles = async () => {
      await dispatch(fetchTitlesFromAPI());

      setIsLoading(false);
    };

    if (isLoading) {
      fetchTitles();
    }
  }, [dispatch, isLoading]);

  const vote = (id, direction) => {
    dispatch(sendVoteToAPI(id, direction));
  };

  if (isLoading) {
    return (
      <h2 className="m-5 text-center">
        <b>Loading...</b>
      </h2>
    );
  }

  /** If loading is false and there are 0 titles in store */

  if (!isLoading && titles.length === 0) {
    return <h3 className="text-center">Please add a post!</h3>;
  }

  return (
    <div className="row mx-1">
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
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i
                className="fas fa-thumbs-up text-success ml-2"
                onClick={(evt) => vote("up", title.id)}
              />
              <i
                className="fas fa-thumbs-down text-danger ml-2"
                onClick={(evt) => vote("down", title.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TitleList;
