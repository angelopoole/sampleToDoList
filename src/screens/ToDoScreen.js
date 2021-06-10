import React from 'react';
import { ToDos } from '../data/ToDoExamples';
import ToDoListItem from '../components/ToDoListItem';
import { stall } from '../util/stall';

const ToDoScreen = () => {
	const fetchToDoItems = async () => {
		console.log('Lets Stall!');
		// const res = fetch(url)
		const res = await ToDos;
		await stall();
		console.log('!', res);
	};

	return (
		<div>
			<button onClick={() => fetchToDoItems()}> grab todo's</button>
		</div>
	);
};

export default ToDoScreen;
