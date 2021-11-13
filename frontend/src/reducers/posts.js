import {
  ADD_POST,
  REMOVE_POST,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE,
} from "../actions/types";

/** Post Related Reducers */

export default function rootReducer(state = {}, action) {
  switch (action.type) {
    // add to state the post's id with object containing the post and its comments
    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    // update post with post id obj, keeping its comments
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments,
        },
      };

    //  delete the state of posts
    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.postId];
      return posts;

    // retrieve post
    case FETCH_POST:
      return { ...state, [action.post.id]: action.post };

    // add comment to post
    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: [state[action.postId].comments, action.comment],
        },
      };

    // filter out comments in order to delete the comment with the id filtered
    case REMOVE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          comments: state[action.postId].comments.filter(
            (comment) => comment.id !== action.commentId
          ),
        },
      };

    default:
      return state;
  }
}
