import React from 'react';
import {connect} from 'react-redux';


import { updateProduction, updatePrice } from '../actions';

class FormData extends React.Component{
	//render a form :) use renderList
	//test passing props into form
	//we have headers but no button
	changeProduction = () => {
		this.props.updateProduction()
	};

	changePrice =  () => {
		this.props.updatePrice()
	}

	renderForm(){
		return this.props.years.map((year,index) => {
			return (
				<li key={index}><span className="year">{index}</span>
				   <input className="production" type="number" value={year.production}
				   onChange={this.changeProduction}/> 
				   <input className="price" type="number" value={year.price} onChange={this.changePrice}/>
				 </li>
				)
		});
	}

	totalValue(){
		let sum = 0;
		this.props.years.map((year) => {
			 sum += year.price * year.production
		})
		return sum;
	}

	//just render a list
	//make ul and li
	//work on styling later
	render(){
	return (
		<form onSubmit={e => e.preventDefault()}>
			<ul>
				<li className="headers">YEAR</li>
				<li className="headers">PRODUCTION</li>
				<li className="headers">PRICE</li>
				{this.renderForm()}
				Total Revenue ${this.totalValue()}
			</ul>
			<label htmlFor="email">Enter your email for a consult:</label>
			<input type="email"/>
			<button>Submit</button>
		</form>
	)
	}
};


//stephen grider review react-redux
//thinkful
const mapStateToProps = (state) => {
	console.log('state',state.years)
	return {years: state.years}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateProduction: () => {dispatch(updateProduction())}
	}
}

//mapping dummmy dispatch

export default connect(mapStateToProps, mapDispatchToProps)(FormData)