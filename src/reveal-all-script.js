// colored console.log from http://stackoverflow.com/questions/7505623/colors-in-javascript-console
console.log("%cClickHole - Reveal All!" + 
	"%c is running on this page.\nTo remove it, disable in chrome://extensions/",
	"background: #fe621e; color: #fff", "");

var revealAnswers = [
	'<button ',
		'class="btn btn-default btn-lg btn-reveal-answers">',
			"Reveal Answers!",
	'</button>'
].join('');

var revealOutcomes = [
	'<div class="reveal-outcomes">',
		'<pre>or</pre>',
		'<button ',
			'class="btn btn-default btn-lg btn-reveal-outcomes">',
				"Reveal Outcomes!",
		'</button>',
	'</div>'
].join('');

// display on top if has answer-explanations
if ( $(".answer-explanation").length ) {
	$(".quiz > form").prepend(revealAnswers);
}

// always display on bottom
$(".quiz > form").append(revealOutcomes);

// reveal outcomes callback
$(".btn-reveal-outcomes").click(function (event) {
    event.preventDefault();

	$(".outcomes").css("display", "block");
	$(".outcome").css("display", "list-item");

	// removes itself after first call
	$(".reveal-outcomes").remove();
});

// reveal answers callback
$(".btn-reveal-answers").click(function (event) {
  event.preventDefault();

	$(".answer-explanation").css("display", "block");

	// removes itself after first call
	$(".btn-reveal-answers").remove();
});

