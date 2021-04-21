import { combineReducers } from "redux";
import songsReducer from "./songs_reducer";
import commentsReducer from "./comments_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    songs: songsReducer,
    comments: commentsReducer
});

export default entitiesReducer;