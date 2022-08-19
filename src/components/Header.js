import React from "react";
import "./Header.css";

function Header() {
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
        <input></input>
      </div>
    </div>
  );
}

export default Header;
