import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Header = () => (
	<header>
		<span className="icn-logo"><i className="fa fa-film"></i></span>
		<ul className="main-nav">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Directors</a></li>
			<li><a href="#">Films</a></li>
		</ul>
	</header>
);

export default Header;