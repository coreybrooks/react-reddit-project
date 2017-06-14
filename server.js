const express = require('express');
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require('mongoose')
const app = express();

const posts = require('./api/routes/posts');

mongoose.Promise = Promise;

const PORT = process.env.PORT || 3000;

//use morgan and body-parser with our app
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));


//database configuration with mongoose
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
mongoose.connect('mongodb://localhost/reddit');
}

var db = mongoose.connection;

//show any mongoose errors
db.on("error", function(error) {
    console.log("mongoose error: " + error);
});

//once logged into the db through mongoose, log a success message
db.once("open", function() {
    console.log("mongooose connection was successful");
});

app.use('/posts', posts);

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
