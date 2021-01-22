import { combineReducers } from "reducers";
import commentsReducer from "../reducers/comments";

export default combineReducers({
  comments: commentsReducer,
});
