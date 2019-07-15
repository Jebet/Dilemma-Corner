import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import commentReducer from "./commentReducer";
import replyReducer from './replyReducer';
export default combineReducers({
  form: formReducer,
  comments: commentReducer,
  replies: replyReducer
  // name: nameReducer
});
