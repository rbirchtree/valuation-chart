import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducers} from './reducers';
// can't find module
//
import './index.css';
import App from './App';

ReactDOM.render(<Provider store={createStore(rootReducers)}>
					<App />
				</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

