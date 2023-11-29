console.log(`I was loaded at ${Date(Date.now()).toString()}`);

$(document).ready(function () {
	var scrollToTopButton = $("#scrollToTopButton");

	// Show or hide the button based on scroll position
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			scrollToTopButton.removeClass("hidden");
		} else {
			scrollToTopButton.addClass("hidden");
		}
	});

	// Smooth scroll to top
	scrollToTopButton.click(function () {
		$("html, body").animate({ scrollTop: 0 }, "smooth");
		return false;
	});
});

$(document).ready(function () {
	var progressBar = $("#scrollProgressBar");

	$(window).on("scroll", function () {
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

		progressBar.css("width", scrollPercent + "%");
	});
});


