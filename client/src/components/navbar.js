import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

export default function navbar() {
		return (
		<nav>
			<Link to="/">Valuation</Link>
			<ul>
			 <li><NavLink exact to="/about">About</NavLink></li>
			 <li><NavLink exact to="/chart">Chart</NavLink></li>
			</ul>
		</nav>
	)	
}