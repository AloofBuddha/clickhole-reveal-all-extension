// colored console.log from http://stackoverflow.com/questions/7505623/colors-in-javascript-console
console.log("%cClickHole - Reveal All!" + 
	"%c is running on this page.\nTo remove it, disable in chrome://extensions/",
	"background: #fe621e; color: #fff", "");

var revealAllHtml = [
	'<button ',
		'class="btn btn-default btn-lg reveal-all">',
			'Reveal All!',
	'</button>'
	].join('');

// always display on bottom
$(".quiz > form").append('<pre>or</pre>', revealAllHtml);

// display on top too if has answer-explanations
if ( $(".answer-explanation").length ) {
	$(".quiz > form").prepend(revealAllHtml);
}

$(".reveal-all").click(function (event) {
    event.preventDefault();

	$(".answer-explanation").css("display", "block");
	$(".outcomes").css("display", "block");
	$(".outcome").css("display", "list-item");
});

