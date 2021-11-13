import React from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="Navbar jumbotron p-4">
      <h1>MicroBlog</h1>
      <p className="lead">Get in the Rithim of blogging!</p>

      <nav>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/new">Add a new post</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
