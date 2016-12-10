//require mongoose
var mongoose = require("mongoose");

//create a schema class
var schema = mongoose.schema;

//create the note schema
var NoteSchema = new Schema({
	//just a string
	title: {
		type: String
	},
	//just a string
	body: {
		type: String
	}
});

//Mongoose automatically saves ObjectIds of notes, referred to in the article model
//create note model with the note schema
var note = mongoose.model("Note", NoteSchema);

//export note model
module.exports = note; 