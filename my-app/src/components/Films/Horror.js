import React from 'react';
import Film from './film';
import {HorrorFilm} from '../../data/films';

const Horror = (props) => {
	let films = HorrorFilm.map((horror) => {
		return <Film 
			key={horror.id}
			img={horror.img_src}
			title={horror.title}
			desc={horror.description}
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

export default Horror;