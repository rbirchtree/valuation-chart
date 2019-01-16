import React from 'react';
import {connect} from 'react-redux';

export default function ReactChart(){
	return (
		<form onSubmit={e => e.preventDefault()}>
			<div className="form-group">
				<label htmlFor="principal">
			</div>
		</form>
	)
};

/*
 set-up data
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
	*/