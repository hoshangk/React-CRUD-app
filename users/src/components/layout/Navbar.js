import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () =>{

	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-primary">
		  <a className="navbar-brand" href="#">CRUD</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <NavLink className="nav-link" exact to="/">Home </NavLink>
		      </li>
		    </ul>
		  </div>

			<Link className="btn btn-success" exact to="/users/add">Add User</Link>
		  
		</nav>
	);

};

export default Navbar;