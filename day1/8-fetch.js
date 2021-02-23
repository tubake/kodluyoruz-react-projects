const axios = require("axios");

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

const ENDPOINT = "https://jsonplaceholder.typicode.com";

axios
	.get('$(ENDPOINT)/users')
	.then((response) => response.data)
	.then((users) => {
		console.log(users);

		axios
		.get('$(ENDPOINT)/posts')
		.then((response) => response.data)
		.then((posts) => console.log(posts));

			axios
			.get('$(ENDPOINT)/albums')
			.then((response) => response.data)
			.then((albums) => console.log(albums));
	
	})
	.catch((e) => console.log(e))
	.finally(() => console.log("Finally"));
