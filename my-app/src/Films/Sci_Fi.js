import React from 'react';
import Film from './film';
import {Sci_Fi} from '../../data/films';

const Sci_Fi = (props) => (
	let films = Horror.map((sci_fi) {
		return <Film 
			key={sci_fi.id}
			img={sci_fi.img_src}
			title={sci_fi.title}
			desc={sci_fi.description}
		/>
	});

	return(
		<div>
			<ul>
				{films}
			</ul>
		/div>
	);
);

export default Sci_Fi;