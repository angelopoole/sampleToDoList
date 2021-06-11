import React from 'react';
import styled from 'styled-components';

const ToDoItemDiv = styled.div`
	display: grid;
	grid-template-columns: 3rem 5rem 2rem;
	grid-template-rows: 2rem 5rem 5rem;
	margin-top: 3rem;
	#title {
		justify-self: start;
		align-self: center;
		background-color: hsla(
			240,
			1.9607843137254923%,
			30.000000000000004%,
			0.644
		);
		margin-bottom: 1rem;
		grid-column: span 2;
	}

	#removeButton {
		justify-self: end;
		align-self: center;
		grid-column: 3;
		grid-row: 1;
	}

	#content {
		margin-top: 1rem;
		grid-row: 2 / span 2;
		grid-column: span 3;
	}
	button {
		all: unset;
		background-color: grey;
	}
`;

const removeButton = styled.button``;

const ToDoListItem = ({ toDoItem }) => {
	// console.log(title, description);

	let { title, description } = toDoItem;
	return (
		<ToDoItemDiv>
			<h3 id='title'>{title}</h3>
			<p id='content'>{description}</p>
			<button id='removeButton'>❌</button>
		</ToDoItemDiv>
	);
};

export default ToDoListItem;
