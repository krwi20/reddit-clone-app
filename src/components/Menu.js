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

  function myFunction() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      var x = document.getElementById("testing");
      if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    }
  }

  return (
    <div id="testing" className="subreddits__container" onClick={myFunction}>
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
