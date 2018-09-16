import React from 'react';
import DirectorList from '../data/directors';

const Directors = () => {
	let directors = DirectorList.map((director) => {
		return(
			<li className="director" key={director.id}>
				<img className="director-img" src={director.img_src} alt="director" />
				<h3>{director.name}</h3>
				<p>{director.bio}</p>
			</li>
		);
	});

	return(
		<div className="main-content">
			<h2>Directors</h2>
			<ul className="group">
				{directors}
			</ul>
		</div>
	);
}

export default Directors;