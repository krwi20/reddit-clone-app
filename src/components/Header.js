import React from "react";
import "./Header.css";

function Header() {
  function myFunction() {
    var x = document.getElementById("testing");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
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
        <input></input>
      </div>
      <div className="header__menu">
        <button onClick={myFunction}>M</button>
      </div>
    </div>
  );
}

export default Header;
