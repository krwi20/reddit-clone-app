import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../store/subredditSlice";

import "./Menu.css";

function Menu() {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits.subreddits);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  console.log(subreddits);

  return (
    <div className="subreddits__container">
      {subreddits.map((subreddit) => (
        <div className="test" key={subreddit.id}>
          <img className="subreddits__image" src={subreddit.icon_img} />
          <h1 className="subreddits__title">{subreddit.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Menu;
