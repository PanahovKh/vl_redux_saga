import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducers } from "./postsReducers";

export const rootReducer = combineReducers({
    posts: postsReducers,
    app: appReducer
})