import posts from "./posts";
import titles from "./titles";

import { combineReducers } from "redux";

/** Root Reducer combining posts and titles related reducers
 *
 */
export default combineReducers({
  posts,
  titles,
});
