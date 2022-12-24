import React from "react";

function Navbar() {
  return (
    <nav>
      <h2 className="nav_logo">
        <span></span>
        <span></span>
        Your Logo
      </h2>
      <ul>
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
        <li>
          <a href="#">blog</a>
        </li>
      </ul>
      <h3 className="search">
        Search
        <img
          width="30"
          height="30"
          src="./images/search-icon-white-16.jpg"
          alt=""
        />
      </h3>
    </nav>
  );
}

export default Navbar;
