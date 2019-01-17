import {UPDATE_PRODUCTION, UPDATE_PRICE} from '../actions';

const initState = {
	years: [
	{price: 60.00, production: 0},
	{price: 60.00, production: 100},
	{price: 50.00, production: 10},
	{price: 20.00, production: 10},
	{price: 40.00, production: 10},
	{price: 70.00, production: 100},
	{price: 70.00, production: 100},
	{price: 90.00, production: 110},
	{price: 80.00, production: 90},
	{price: 60.00, production: 60}]
};

 export const rootReducers = (state=initState,action) =>{
	if(action.type === UPDATE_PRODUCTION){

	}
	if(action.type === UPDATE_PRICE){

	}
	return state;
};
