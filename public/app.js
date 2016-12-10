//grab articles as a json
$.getJSON("/articles", function(data) {
	//for each article
	for (var i = 0; i < data.length; i++) {
		//display the apropos information on the page
		$("articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link "</p>");
	}
});

//whenever a p tag is clicked
$(document).on("click", "p", function() {
	//empty the notes from the note section
	$("notes").empty();
	//save the id from the p tag
	var thisId = $(this).attr("data-id");

	//now an ajax call for the article
	$.ajax({
		method: "GET",
		url: "/articles/" + thisId
	})

	//now add the note information to the page
	.done(function(data){
		console.log(data);

		//article title
		$("#notes").append("<h2" + data.title + "</h2");
		//an input to enter a new title
		$("#notes").append("<input id='titleinput' name='title' >");
		//add a textarea to hold a note
		$("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
		//add a button for submitting notes with the id of the article
		$("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

		//if there is a note in the article
		if (data.note) {
			//place the title of the note in the title input
			$("#titleinput").val(data.note.title);
			//place the body of the note in the body textarea
			$("#bodyinput").val(data.note.body);
		}
	});
});

//when the savenote button is clicked
$(document).on("click", "#savenote", function() {
	//collect the id associated with the article from the submit button
	var thisId = $(this).attr("data-id");

	//run a post request to change the note, using what is entered in the inputs
	$.ajax({
		method: "POST",
		url: "/articles/" + thisId,
		data: {
			//value taken from the title input
			title: $("#titleinput").val(),
			//value taken fromm note textarea
			body: $("#bodyinput").val()

			//empty the notes section
			$("#notes").empty()
		}
	})
		//with that done
		.done(function(data) {
			//log the response
			console.log(data);
			//empty the notes section
			$("#notes").empty();
		});

		//remove the values entered in the input and textarea for note entry
		$("#titleinput").val("");
		$("#bodyinput").val("");	
	});