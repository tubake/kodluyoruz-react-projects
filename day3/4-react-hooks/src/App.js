import { useEffect, useState } from 'react';
import './App.css';

import Counter from './components/Counter';

function App() {
	const [name, setName] = useState('Tuba');
	const [age, setAge] = useState(22);
	const [isVisible, setIsVisible] = useState(0);

	useEffect(() => {
		console.log('State updated');
	});

	useEffect(() => {
		console.log('App component mounted');

		return () => console.log('App component unmounted!');
	}, []);

	useEffect(() => {
		console.log('Age/Name state uptated');
	}, [age, name]);

	return (
		<div className="App">
			<header className="App-header">
				{isVisible && <Counter />}
				<button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
				<br />
				{name} {age}
				<button onClick={() => setName('Tubake')}>Change</button>
				<button onClick={() => setAge(29)}>Change Age</button>
			</header>
		</div>
	);
}

export default App;
