import React from "react";
import { Route, NavLink } from 'react-router-dom';
import Thriller from './Films/Thriller';
import Horror from './Films/Horror';
import Sci_Fi from './Films/Sci_Fi';

//Component NavLink gives active links a default class of active.
const Films = () => (
	<div className="main-content films">
		<div className="film-header group">
			<h2>Films</h2>
			<ul className="film-nav">
				<li><NavLink to='/films/thriller'>Thriller</NavLink></li> 
				<li><NavLink to='/films/sci_fi'>Sci-Fi</NavLink></li>
				<li><NavLink to='/films/horror'>Horror</NavLink></li>
			</ul>
		</div>
     	<Route exact path="/films/thriller" render={() => <Thriller />} />
        <Route path="/films/sci_fi" render={() => <Sci_Fi />} />
        <Route path="/films/horror" render={() => <Horror />} />  
	</div>
);

export default Films;