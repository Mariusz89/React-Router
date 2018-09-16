import React from "react";
import { NavLink } from "react-router-dom";

const Films = () => (
	<div className="main-content films">
		<div className="film-header group">
			<h2>Films</h2>
			<ul className="film-nav">
				<li><NavLink to='/films/thriller'>Thriller</NavLink></li>
				<li><NavLink to='/films/sci-fi'>Sci-Fi</NavLink></li>
				<li><NavLink to='/films/horror'>Horror</NavLink></li>
			</ul>
		</div>
	</div>
);

export default Films;