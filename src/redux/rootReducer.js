import { combineReducers } from "redux";
import { postsReducers } from "./postsReducers";

export const rootReducer = combineReducers({
    posts: postsReducers
})