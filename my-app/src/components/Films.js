import React from "react";
import { Link } from "react-router-dom";

const Films = () => (
	<div className="main-content films">
		<div className="film-header group">
			<h2>Films</h2>
			<ul className="film-nav">
				<li><Link to='/films/thriller'>Thriller</Link></li>
				<li><Link to='/films/sci-fi'>Sci-Fi</Link></li>
				<li><Link to='/films/horror'>Horror</Link></li>
			</ul>
		</div>
	</div>
);

export default Films;