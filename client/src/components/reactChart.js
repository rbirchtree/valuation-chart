import React, { Component } from 'react';
import {connect} from 'react-redux';
import { LineChart } from 'react-charts-d3';

class ReactChart extends Component {



	render(){		
	  let priceArr = [];
	  let productionArr = [];

	  this.props.data.map( x=> {
	  	console.log(typeof x.id)
	  	console.log(typeof x.price)
	    priceArr.push({x: x.id}, {y: Number(x.price)})
	    productionArr.push({x: x.id}, {y: Number(x.production)})
	  });	

		const data = [
	    { key: 'Production', values: productionArr},
	    { key: 'Price', values: priceArr }
		];
		console.log('data',data)
		//<LineChart data={data} />
		console.log(this.props.data)
		return (
		<LineChart data={data} />
		)
	}
};

/*
<LineChart data={data} />
const data = [
    { key: 'Group 1', values:  { x: 'A', y: randomNumber() },{ x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
    { key: 'Group 2', values: [ { x: 'A', y: randomNumber() }, { x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
    { key: 'Group 3', values: [ { x: 'A', y: randomNumber() }, { x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
];*/

const mapStateToProps = (state) => {
	console.log('state',state)
	return {
		data: state.years
	}
}

export default connect(mapStateToProps)(ReactChart);