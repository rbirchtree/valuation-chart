import React, {Component} from 'react';
import {connect} from 'react-redux';

import {UPDATE_PRODUCTION, UPDATE_PRICE} from '../actions';

class FormData extends React.Component{
	
	render(){
	return (
		<form onSubmit={e => e.preventDefault()}>
			<div className="grid-container">
				<div className="grid-items">
					YEAR
				</div>
				<div className="grid-items">
					<label htmlFor="Price">PRICE</label>
				</div>
				<div className="grid-items">
					<label htmlFor="Production">PRODUCTION</label>
				</div>
				<div className="grid-items">
					Year 1
				</div>
				<div className="grid-items">
					<input type="number" id="price" min="0" value={props}/>
				</div>
				<div className="grid-items">
					<input type="number" id="production"/>
				</div>
				<div className="grid-items">
					Year 2
				</div>
				<div className="grid-items">
					<input type="number" id="price"/>
				</div>
				<div className="grid-items">
					<input type="number" id="production"/>
				</div>
				<div className="grid-items">
					Year 3
				</div>
				<div className="grid-items">
					<input type="number" id="price"/>
				</div>
				<div className="grid-items">
					<input type="number" id="production"/>
				</div>
			</div>
			<label for="email">Enter your email for a consult:</label>
			<input type="email"/>
			<button></button>
		</form>
	)
	}
};


//stephen grider review react-redux
//thinkful
const mapStateToProps = (state) => {
	console.log('state',state)
	return state
}


export default connect(mapStateToProps)(FormData)