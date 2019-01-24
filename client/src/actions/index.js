export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePrice= (id,price) => ({
	type: UPDATE_PRICE,
	price,
	id
});

export const UPDATE_PRODUCTION = 'UPDATE_PRODUCTION';
export const updateProduction = (id,production) => ({
	type: UPDATE_PRODUCTION,
	production,
	id
});

export const SUBMIT_DATA = 'SUBMIT_DATA';
export const submitData = data => ({
	type: SUBMIT_DATA,
	data
});