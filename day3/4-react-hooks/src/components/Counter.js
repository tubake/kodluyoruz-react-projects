import { useState, useEffect } from 'react';

function Counter() {
	const [count, setCount] = useState(0);
	

	useEffect(() => {
		setInterval(() => {
			setCount((c) => c + 1);
		}, 1000);

		return () => clearInterval(setInterval);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
		</div>
	);
}

export default Counter;
