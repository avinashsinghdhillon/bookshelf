import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
      <a class="navbar-brand" href="#">Book Shelf</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
