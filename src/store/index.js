import { configureStore } from "@reduxjs/toolkit";
import subredditReducer from "./subredditSlice";
import redditReducer from "./redditSlice";

export default configureStore({
  reducer: {
    subreddits: subredditReducer,
    reddits: redditReducer,
  },
});
