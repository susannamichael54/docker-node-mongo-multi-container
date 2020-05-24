const mongoose = require("mongoose");
const express = require("express");

const app = express();

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
	.connect(DATABASE)
	.then(() => {
		console.log("DB connected");
	}).catch(() => {
		console.log("Error in DB connection!");
	});

app.get("/", (req, res) => {
	res.json({
		message: "You are visiting ROOT route"
	})
})

app.listen(8000, () => {
	console.log("8000 is ready to serve....")
})