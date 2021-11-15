import axios from "axios";

import { FETCH_TITLES } from "./types";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

/** Fetch all titles from API */

export function fetchTitlesFromAPI() {
  return async function thunk(dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}`);

      dispatch(getTitles(data));
    } catch (err) {
      dispatch(handleError());
    }
  };
}

function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles,
  };
}

function handleError(error) {
  return {
    type: "ERROR",
    error,
  };
}
