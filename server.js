// list dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//requiring note and article models
var Note = require("./models/Note.js");
var Article = require("./models/Articles.js");

//scraping tools
var request = require("request");
var cheerio = require("cheerio");

//mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;

//initialize Express
var app = express();

//use morgan and body-parser with the app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));

//make public a static dir
app.use(express.static("public"));

//database configuration with mongoose
mongoose.connect("mongodb://localhost/week18day3mongoose");
var db = mongoose.connection;

//show any mongoose errors
db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

//login success message
db.once("open", function() {
	console.log("Mongoose connection successful.");
});
//routes

//simple index route
app.get("/", function(req, res) {
	res.send(index.html);
});

// a GET request to scrape the site
app.get("/scrape", function(req, res) {
	request("http://www.usefnetwork.com/news/", function(error, response, html) {
		//then load into cheerio and save it to $ for a shorthand selector
		var $ = cheerio.load(html);
		//now get every h2 in the article tag and do:
		&("article h2").each(function(i, element) {
			save
		})
	}
})