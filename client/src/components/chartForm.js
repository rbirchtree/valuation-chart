import React from 'react';
import {connect} from 'react-redux';



export default function ReactChart(){
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
					<input type="number" id="price"/>
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
};


{/* set-up data
{id:0, price: 60.00, production: 0},
	{id:1, price: 60.00, production: 100},
	{id:2, price: 50.00, production: 10},
	{id:3, price: 20.00, production: 10},
	{id:4, price: 40.00, production: 10},
	{id:5, price: 70.00, production: 100},
	{id:6, price: 70.00, production: 100},
	{id:7, price: 90.00, production: 110},
	{id:8, price: 80.00, production: 90},
	{id:9, price: 60.00, production: 60}]
	https://www.w3schools.com/css/tryit.asp?filename=trycss_grid
	*/}