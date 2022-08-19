import React from "react";
import "./Content.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRedditPosts } from "../store/redditSlice";

function Content() {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddits.chosenSubreddit);
  const posts = useSelector((state) => state.reddits.posts);

  useEffect(() => {
    dispatch(getRedditPosts(reddit));
  }, [dispatch]);

  return (
    <div className="content">
      {posts.map((reddit) => (
        <div>
          <h1>{reddit.title}</h1>
          <img src={reddit.url} />
        </div>
      ))}
    </div>
  );
}

export default Content;
