import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  FETCH_TITLES,
  VOTE,
} from "../actions/types";

const sortByVote = (posts) => {
  return posts.sort((a, b) => b.votes - a.votes);
};

/** returns object with data in variable
 */
const makeTitleFromPost = ({ id, title, description, votes }) => {
  return { id, title, description, votes };
};

export default function rootReducer(state = [], action) {
  switch (action.type) {
    /** Fetch titles by vote */
    case FETCH_TITLES:
      return sortByVote([...action.titles]);

    /** Returns previous state and creates obj of post data */
    case ADD_POST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case REMOVE_POST:
      return state.filter((title) => title.id !== action.postId);

    case UPDATE_POST:
      return state.map((title) =>
        title.id === action.post.id ? makeTitleFromPost(action.post) : title
      );

    case VOTE:
      return sortByVote(
        state.map((title) =>
          title.id === action.postId ? { ...title, votes: action.votes } : title
        )
      );

    default:
      return state;
  }
}
