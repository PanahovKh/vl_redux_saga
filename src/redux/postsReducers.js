import { CREATE_POST, FETCH_POST } from "./types";

const initialState = {
    post: [],
    fetchedPosts: []
}

//Pure Functions
export const postsReducers = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, post: [...state.post, action.payload]}
        case FETCH_POST:
            return {...state, fetchedPosts: action.payload }
        default:
            return state
    }
}