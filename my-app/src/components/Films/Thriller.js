import React from 'react';
import Film from './film';
import {ThrillerFilm} from '../../data/films';

const Thriller = (props) => {
	let films = ThrillerFilm.map((thriller) => {
		return <Film 
			key={thriller.id}
			img={thriller.img_src}
			title={thriller.title}
			desc={thriller.description}
		/>
	});

	return(
		<div>
			<ul>
				{films}
			</ul>
		</div>
	);
};

export default Thriller;