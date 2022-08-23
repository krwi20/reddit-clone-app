import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRedditPosts = createAsyncThunk(
  "redditPosts/getRedditPosts",
  async (reddit) => {
    const response = await fetch(`https://www.reddit.com${reddit}.json`);
    const json = await response.json();
    return json.data.children.map((reddit) => reddit.data);
  }
);

export const searchRedditPosts = createAsyncThunk(
  "redditPosts/searchRedditPosts", 
  async (reddit) => {
    const response = await fetch(`https://www.reddit.com${reddit}.json`);
    const json = await response.json();
    return json.data.children.map((reddit) => reddit.data);
  }
);

export const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    posts: [],
    isLoading: false,
    chosenSubreddit: "/r/cat",
  },
  extraReducers: {
    // INITIAL REDDIT POSTS
    [getRedditPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getRedditPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [getRedditPosts.rejected]: (state) => {
      state.isLoading = false;
    },
    // SEARCH REDDIT POSTS
    [searchRedditPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [searchRedditPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [searchRedditPosts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default redditSlice.reducer;
