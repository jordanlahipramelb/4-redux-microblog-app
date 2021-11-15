import axios from "axios";

import {
  FETCH_POST,
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE,
} from "./types";

/** URL paths to send data located in backend/routes */

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

/** Retrieve single post from API via id */

export function getPostFromAPI(id) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/${id}`);

      // DISPATCH once we get results from API
      dispatch(getPost(data));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

// normal action creator & action. action types located in rootReducer
function getPost(post) {
  return {
    type: FETCH_POST,
    post,
  };
}

/** Send post data (title, description, body) to API */

export function sendPostToAPI(title, description, body) {
  return async function thunk(dispatch) {
    try {
      //                                (URL, dataToSend)
      const { data } = await axios.post(`${API_URL}`, {
        title,
        description,
        body,
      });

      // DISPATCH once we get results from API
      dispatch(addPost(data));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

/** Remove post data via postId from API */

export function removePostFromAPI(id) {
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${API_URL}/${id}`);

      // DISPATCH once we get results from API
      dispatch(removePost(id));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  };
}

/** Update post data (title, description, body) to API */

export function updatePostInAPI(id, title, description, body) {
  return async function thunk(dispatch) {
    try {
      //                                (URL, dataToSend)
      const { data } = await axios.post(`${API_URL}/${id}`, {
        title,
        description,
        body,
      });

      // DISPATCH once we get results from API
      dispatch(updatePost(data));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

/** Remove comment from API via postId and commentId  */

export function removeCommentFromAPI(postId, commentId) {
  return async function thunk(dispatch) {
    try {
      await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);

      dispatch(removeComment(postId, commentId));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}

/** Send comment to API via postId and text  */

export function sendCommentToAPI(postId, text) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.post(`${API_URL}/${postId}/comments/`, {
        text,
      });
      return dispatch(addComment(postId, data));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function addComment(postId, comment) {
  return { type: ADD_COMMENT, postId, comment };
}

/** Send vote to API via id of post and the up/down direction */

export function sendVoteToAPI(id, direction) {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.post(`${API_URL}/${id}/vote/${direction}`);

      dispatch(vote(id, data.votes));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function vote(postId, votes) {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  };
}

function handleError(error) {
  return {
    type: "ERROR",
    error,
  };
}
