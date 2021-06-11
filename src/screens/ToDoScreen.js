import React, { useEffect, useState } from 'react';
import { ToDos } from '../data/ToDoExamples';
import ToDoListItem from '../components/ToDoListItem';
import { stall } from '../util/stall';
import styled from 'styled-components';

const NewToDoForm = styled.form`
	display: flex;
	justify-content: center;

	textarea {
		resize: none;
	}
`;

const ToDoGrid = styled.div`
	display: grid;
	grid-template-columns: 12rem 12rem 12rem;
	grid-template-rows: 12rem 12rem 12rem;
	justify-content: space-evenly;
	align-content: space-evenly;
	grid-auto-flow: row;
`;

const Footer = styled.footer`
	bottom: 0;
`;

const ToDoScreen = () => {
	//State
	const [toDos, setToDos] = useState([]);
	const [formState, setFormState] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		const fetchToDoItems = async () => {
			console.log('Lets Stall!');
			// const res = fetch(url)
			const res = await ToDos;
			await stall();
			console.log('!', res);
			await setToDos(res);
		};
		fetchToDoItems();
	}, []);

	const toDoListComponentEmitter = toDos.map(item => (
		<ToDoListItem key={item.title} toDoItem={item} />
	));

	const handleNewTodoSubmit = e => {
		e.preventDefault();

		// here we would create a fetch-POST /axios.post, stringify and send along as body of command. for this example we're gonna add it to the todolist arr
		console.log('submit?');

		setToDos([...toDos, formState]);
		setFormState({
			title: '',
			description: '',
		});
	};

	const handleFormValueChange = e => {
		let name = e.target.name;
		let value = e.target.value;

		setFormState({ ...formState, [name]: value });
	};

	console.log(toDos);
	console.log(formState);
	console.log(formState.title, formState.description);

	return (
		<>
			<NewToDoForm>
				<input
					name='title'
					type='text'
					value={formState.title}
					onChange={handleFormValueChange}
				/>{' '}
				:
				<textarea
					name='description'
					id='textdescription'
					value={formState.description}
					onChange={handleFormValueChange}
				></textarea>
				<button onClick={e => handleNewTodoSubmit(e)}>Add new ToDo</button>
			</NewToDoForm>
			<ToDoGrid>
				{toDoListComponentEmitter}
				{/* <button onClick={() => fetchToDoItems()}> grab todo's</button> */}
			</ToDoGrid>
			<Footer>just cause</Footer>
		</>
	);
};

export default ToDoScreen;
