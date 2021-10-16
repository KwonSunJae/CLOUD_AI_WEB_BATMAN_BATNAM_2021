import client from "../api/client";

const api = async () => {
	const res = await client.get("/api/test");
	console.log(res);
}

const Test = () => {
	api();
	return(
		<div>
			Test Page
		</div>
	);
}

export default Test;