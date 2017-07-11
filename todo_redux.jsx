import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo } from './actions/todo_actions.js';
import App from './components/app.jsx';
import Root from './components/root.jsx';
// import getALLTodos from './reducers/selectors.js';

// const Root = (store)

document.addEventListener("DOMContentLoaded", () => {
	const store = configureStore();
	ReactDOM.render(<Root store={store} />, document.getElementById("root")); // take in store arg, pass it down to children.  serving as wrapper.
  window.store = store;
  window.receiveTodo = receiveTodo;
});
