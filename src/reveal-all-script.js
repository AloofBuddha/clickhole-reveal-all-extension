console.log("ClickHole - Reveal All! is running on this page. To remove it, disable in chrome://extensions/");

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

