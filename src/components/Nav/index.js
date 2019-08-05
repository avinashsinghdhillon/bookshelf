import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="/">Book Shelf</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/searchbooks">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/savedbooks">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
