import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSubreddits = createAsyncThunk(
  "subreddits/getSubreddits",
  async () => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  }
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    subreddits: [],
    isLoading: false,
  },
  extraReducers: {
    [getSubreddits.pending]: (state) => {
      state.isLoading = true;
    },
    [getSubreddits.fulfilled]: (state, action) => {
      state.subreddits = action.payload;
      state.isLoading = false;
    },
    [getSubreddits.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default subredditSlice.reducer;
