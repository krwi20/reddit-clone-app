import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../store/subredditSlice";

import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits.subreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  console.log(subreddits);

  return (
    <div>
      {subreddits.map((subreddit) => (
        <div className="subreddits__container">
          <article key={subreddit.id}>
            <h1>{subreddit.title}</h1>
            <img src={subreddit.icon_img} />
          </article>
        </div>
      ))}
    </div>
  );
}

export default Home;
