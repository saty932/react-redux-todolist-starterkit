import React from 'react';
import './App.css';
import TodoList from './components/todolist';
import {store} from './store';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<Provider store={store}>
		<div className="App">
		<TodoList/>
		</div>
		</Provider>
		);
}

export default App;
