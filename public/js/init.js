$(document).ready(function(){
	
	new WOW().init();

	$('.reviews-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		infinite: true,
		autoplay: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					dots: false,
					autoplay: true,
					slidesToShow: 1,
				}
			}
		],
		prevArrow: `<button type="button" class="slick-prev"><i class="bi bi-chevron-compact-left"></i></button>`,
		nextArrow: `<button type="button" class="slick-next"><i class="bi bi-chevron-compact-right"></i></button>`
	});
});