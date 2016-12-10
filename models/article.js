//require Mongoose
var mongoose = require("mongoose");

//create schema class
var schema = mongoose.Schema;

//create article schema
var ArticleSchema = new Schema({
	//title is a required string
	title: {
		type: String,
		required: true
	},
	//link is a required string
	link: {
		type: String,
		required: true
	},
	//this saves one note's ObjectId, ref refers to Note model
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

//create the article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

//export the model
module.exports = Article;
