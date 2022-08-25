import React from "react";
import "./Header.css";
import { searchRedditPosts } from '../store/redditSlice';
import { useDispatch } from 'react-redux';

function Header() {

  const dispatch = useDispatch();

  function viewMenu() {
    var x = document.getElementById("testing");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

  // sends the input value to the function in redditslice to update the posts
  function searchFunction(e) {
    dispatch(searchRedditPosts(`/r/${e.target.value}`));
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
          alt="reddit logo"
        />
        <p>Reddit Clone</p>
      </div>
      <div className="header__searchbar">
        <input onChange={searchFunction}></input>
      </div>
      <div className="header__menu">
        <button onClick={viewMenu}>M</button>
      </div>
    </div>
  );
}

export default Header;
