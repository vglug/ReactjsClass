import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <ul className="App-header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
