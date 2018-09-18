import React from "react";
import { Route, NavLink, Redirect } from 'react-router-dom';
import Thriller from './Films/Thriller';
import Horror from './Films/Horror';
import SciFi from './Films/Sci_Fi';

//Component NavLink gives active links a default class of active.
//Object match contains information about how a route is matching the URL.
/*Create the paths using a template literal that dynamically places or
  interpolates the value of match.url into the path.
*/
const Films = ({match}) => (
	<div className="main-content films">
		<div className="film-header group">
			<h2>Films</h2>
			<ul className="film-nav">
				<li><NavLink to={`${match.url}/thriller`}>Thriller</NavLink></li> 
				<li><NavLink to={`${match.url}/sci_fi`}>Sci-Fi</NavLink></li>
				<li><NavLink to={`${match.url}/horror`}>Horror</NavLink></li>
			</ul>
		</div>

		<Route exact path={match.path} render={() => <Redirect to={`${match.path}/thriller`} />} />
     	<Route path={`${match.path}/thriller`} component={Thriller} />
        <Route path={`${match.path}/sci_fi`} component={SciFi} />
        <Route path={`${match.path}/horror`} component={Horror} /> 
	</div>
);

export default Films;