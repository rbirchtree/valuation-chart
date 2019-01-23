import {UPDATE_PRODUCTION, UPDATE_PRICE} from '../actions';

const initState = {
	years: [
	{id:0,price: 60.00, production: 0},
	{id:1,price: 60.00, production: 100},
	{id:2,price: 50.00, production: 10},
	{id:3,price: 20.00, production: 10},
	{id:4,price: 40.00, production: 10},
	{id:5,price: 70.00, production: 100},
	{id:6,price: 70.00, production: 100},
	{id:7,price: 90.00, production: 110},
	{id:8,price: 80.00, production: 90},
	{id:9,price: 60.00, production: 60}]
};

 export const rootReducers = (state=initState,action) =>{
	console.log('action',action)
	console.log('action production',action.production)
	if(action.type === UPDATE_PRODUCTION){
		//find by id and update
		let newProduction = state.years.find(year => year.id === action.id)
		newProduction = newProduction.production+5
		console.log('new Production',newProduction)
		console.log('success', action.type)
		console.log('action.id',action.id)
		console.log('state reducer',state)
		//increment by 1
		return {
			...state
		}
	}
	if(action.type === UPDATE_PRICE){

	}
	return state;
};
