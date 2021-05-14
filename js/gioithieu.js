$(document).ready(function() {
	$('.collapse ul li a').click(function(event) {
		event.preventDefault();

		part = $(this).attr('href');

		position = $(part).offset().top - 50;

		$('html, body').animate({scrollTop: position},1000);
	});
});