// colored console.log from http://stackoverflow.com/questions/7505623/colors-in-javascript-console
console.log("%cClickHole - Reveal All!" + 
	"%c is running on this page.\nTo remove it, disable in chrome://extensions/",
	"background: #fe621e; color: #fff", "");

var revealAllHtml = [
	'<pre>or</pre>',
	'<button id="revealall" ',
		'class="btn btn-default btn-lg">',
			'Reveal All!',
	'</button>'
	].join('');

var form = $(".quiz > form").append(revealAllHtml);

$("#revealall").click(function (event) {
    event.preventDefault();

	$(".outcomes").css("display", "block");
	$(".outcome").css("display", "list-item");
});

