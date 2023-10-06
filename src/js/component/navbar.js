import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className=" container navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites(0)</button>
				</Link>
			</div>
		</nav>
	);
};
