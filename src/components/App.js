import styled from 'styled-components';
import ToDoScreen from '../screens/ToDoScreen';

const ApplicationStyles = styled.div`
	background-color: red;
`;

function App() {
	return (
		<ApplicationStyles>
			<ToDoScreen />
		</ApplicationStyles>
	);
}

export default App;
