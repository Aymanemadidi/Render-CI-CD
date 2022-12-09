import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from Aymane");
});

app.get("/test", (req, res) => {
	res.send("This is the test page");
});

app.listen(3001, () => {
	console.log("Server is listenning at port: 3001");
});
