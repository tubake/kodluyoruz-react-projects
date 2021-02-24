const axios = require('axios');

axios
	.get('https://jsonplaceholder.typicode.com/users')
	.then((res) => res.data)
	.then((users) => {
		const onlyNames = users.map((u) => {
			return { name: u.name };
		});
		return onlyNames;
	})
	.then((names) => console.log(names));

// axios
// 	.get('https://jsonplaceholder.typicode.com/users')
// 	.then((res) => res.data)
// 	.then((users) => {
// 		const leanne = users.find((user) => user.id === 1);
// 		console.log(leanne);
// 	});

//get promise dönüyor

// fetch(API_ENDPOINT) //erişeceğimiz data
// 	.then((response) => response.json()) //fetch işlemi bittikten sonra burayı çalıştır
// 	.then((json) => console.log(json)); //daha sonra burayı çalıştır
//1
// axios
// 	.get("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => response.data)
// 	.then((users) => [...users, { name: "Tuba" }])
// 	.then((data) => console.log(data))
// 	.catch((e) => console.log(e))
// 	.finally(() => console.log("Finally"));

//2.

// const ENDPOINT = "https://jsonplaceholder.typicode.com";

// axios
// 	.get('$(ENDPOINT)/users')
// 	.then((response) => response.data)
// 	.then((users) => {
// 		console.log(users);

// 		axios
// 		.get('$(ENDPOINT)/posts')
// 		.then((response) => response.data)
// 		.then((posts) => console.log(posts));

// 			axios
// 			.get('$(ENDPOINT)/albums')
// 			.then((response) => response.data)
// 			.then((albums) => console.log(albums));

// 	})
// 	.catch((e) => console.log(e))
// 	.finally(() => console.log("Finally"));
