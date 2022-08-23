import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../store/subredditSlice";
import { searchRedditPosts } from '../store/redditSlice'

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

  //remove white space from title and update contents
  function consoleFunc(a) {
    dispatch(searchRedditPosts(a.url));
  }

  return (
    <div id="testing" className="subreddits__container" onClick={myFunction}>
      {subreddits.map((subreddit) => (
        <div className="test" key={subreddit.id} onClick={() => consoleFunc(subreddit)}>
          {subreddit.icon_img === "" ? <img className="subreddits__image" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAAACnej3aAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=" /> 
          : <img className="subreddits__image" src={subreddit.icon_img}/>}
          <h1 className="subreddits__title">{subreddit.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Menu;
