import { useState, useEffect } from 'react';

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/users').then((res) => console.log(res.data));
	}, []);

	return <div>user list</div>;
}

export default UserList;
