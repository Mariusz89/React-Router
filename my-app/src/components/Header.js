import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => (
	<header>
		<span className="icn-logo"><i className="fa fa-film"></i></span>
		<ul className="main-nav">
			<li><NavLink exact to="/">Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/directors">Directors</NavLink></li>
			<li><NavLink to="/films">Films</NavLink></li>
		</ul>
	</header>
);

export default Header;