import React from 'react';
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const Header = () => (
	<header>
		<span className="icn-logo"><i className="fa fa-film"></i></span>
		<ul className="main-nav">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/directors">Directors</Link></li>
			<li><Link to="/films">Films</Link></li>
		</ul>
	</header>
);

export default Header;