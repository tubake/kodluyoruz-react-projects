import React from 'react';

function UserList({ users }) {
	console.log({ users });
	return (
		<ul>
			{users.map((user, i) => (
				<li key={i}>{user} </li>
			))}
		</ul>
	);
}

export default UserList;
