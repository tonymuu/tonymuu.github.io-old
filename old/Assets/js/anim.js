var main = function() {
	$('#arrow1').click(function() {
		var isDown = true;
		var link = $(this).children("a");
		var image = link.children("img");
		if (link.attr("href") === "#jumbotron") {
			isDown = false;
		}

		if (isDown) {
			image.fadeOut(200);
			link.attr("href", "#jumbotron");
			image.attr("src", "Assets/images/up-arrow.png");
			image.fadeIn(200);

		} else {
			image.fadeOut(200);
			link.attr("href", "#jump1");
			image.attr("src", "Assets/images/down-arrow.png");			
			image.fadeIn(200);
		}
	});

	$('#arrow2').click(function() {
		var isDown = true;
		var link = $(this).children("a");
		var image = link.children("img");
		if (link.attr("href") === "#jump1") {
			isDown = false;
		}

		if (isDown) {
			image.fadeOut(200);
			link.attr("href", "#jump1");
			image.attr("src", "Assets/images/up-arrow-black.png");
			image.fadeIn(200);

		} else {
			image.fadeOut(200);
			link.attr("href", "#arrow2");
			image.attr("src", "Assets/images/down-arrow-black.png");
			image.fadeIn(200);
		}
	});


}

$(document).ready(main());