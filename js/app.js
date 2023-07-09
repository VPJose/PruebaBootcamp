$(document).ready(function () {

	$(window).scroll(function () {
		$('header').toggleClass("scrolled", $(this).scrollTop() >= 30)
		$('nav').toggleClass("scrolled", $(this).scrollTop() >= 30)
		
		if ($('#footer').isInViewport()) {
			$('#follow').fadeOut();
		} else {
			$('#follow').fadeIn();
		}
	})

	// Carousel
	$('#carousel-best-sellers').owlCarousel({
		items: 1,
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
		center: true,
		responsive: {
			992: {
				margin: 0,
				stagePadding: 50,
			},
			1200: {
				stagePadding: 120,
			},
		}
	})

	$('#carousel-ourServices').owlCarousel({
		items: 1,
		margin: 40,
		center: true,
		stagePadding: 20,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
	})

	$("#carousel-reviews").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			768: {
				margin: 0,
				nav: true,
				navText: [null, 'Next'],
				dots: false,
			},
			992: {
				margin: 0,
				nav: true,
				navText: [null, 'Next'],
				dots: false,
			},
		}
	});

	$('.btn-menu').click(function () {
		$('#menu').toggleClass('visible')
	})

	$('.close').click(function () {
		$('#menu').toggleClass('visible')
	})
})

$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};