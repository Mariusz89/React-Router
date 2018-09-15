import React from 'react';
import DirectorList from '../directors.js';

const Directors = () => {
	let directors = DirectorList.map((director) => {
		return(
			<li key={director.id}>
				<h3>{director.name}</h3>
				<p>{director.bio}</p>
				<img src={director.img_src} alt="director" />
			</li>
		);
	});

	return(
		<div>
			<h2>Directors</h2>
			<ul>
				{directors}
			</ul>
		</div>
	);
}

export default Directors;