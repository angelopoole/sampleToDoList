import styled from 'styled-components';
import ToDoScreen from '../screens/ToDoScreen';

const ApplicationStyles = styled.div`
	background-color: hsl(0, 0%, 50.19607843137255%);
	height: 100vh;
`;

function App() {
	return (
		<ApplicationStyles>
			<ToDoScreen />
		</ApplicationStyles>
	);
}

export default App;
