import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

export default function navbar() {
		return (
		<nav>
			<ul>
			 <li><NavLink exact to="/about">About</NavLink></li>
			 <li><NavLink exact to="/demo">Demo Chart</NavLink></li>
			</ul>
		</nav>
	)	
}