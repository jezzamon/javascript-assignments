$(document).ready(function() { 
  $("body").append("<p>here are some more text!</p>"); 
  $("li").html("I'm taking over!");
});



for (var i = 0 ; i <= 100; i++) {
	console.log(i);
	
		if (i % 3) {
			console.log("fizz!");
		}
		if (i % 5) {
			console.log("buzz!");
	}
		if (i % 3) {
			if (i % 5) {
				console.log("fizzbuzz!");
			
			}
		}
	}
