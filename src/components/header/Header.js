import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_logo from "./images/logo_cio.jpeg";
import NavLink from "./NavLink";

class Header extends Component {
  render() {
    return (
      <nav
        className="NavigationBar navbar navbar-expand-lg navbar-light bg-light"
        style={{ borderBottom: "1px solid #d9d9d9" }}
      >
        <Link to="/" className="navbar-brand">
          <img
            src={image_logo}
            className="d-inline-block align-top"
            width="auto"
            height="50"
            alt="log"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="feed">Feed</NavLink>

            <NavLink to="/scores">Scores</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </ul>

          <form id="searchButtonHeader" className="form-inline my-2 my-lg-0">
            <input
              className="searchBoxInputArea form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="searchBoxSubmitButton btn btn-outline-info my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
