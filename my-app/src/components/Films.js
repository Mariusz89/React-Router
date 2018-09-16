import React from "react";

const Films = () => (
	<div className="main-content films">
		<div className="film-header group">
			<h2>Films</h2>
			<ul className="film-nav">
				<li><a href='/films/thriller'>Thriller</a></li>
				<li><a href='/films/sci-fi'>Sci-Fi</a></li>
				<li><a href='/films/horror'>Horror</a></li>
			</ul>
		</div>
	</div>
);

export default Films;