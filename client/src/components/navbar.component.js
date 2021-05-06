import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">The Parking Space Tracker</Link>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Parking Spaces</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create a Parking Space List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search by Price</Link>
          </li>
      </nav>
    );
  }
}