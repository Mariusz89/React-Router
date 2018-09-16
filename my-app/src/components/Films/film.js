import React from 'react';

const Film = (props) => (
	<li className="film media group">
		<img className="film-img" src={props.img} alt="film" />
		<div>
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</div>
	</li>
);

export default Film;