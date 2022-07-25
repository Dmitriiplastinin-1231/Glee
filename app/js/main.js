$(function() {
	
	$('.top-slider__inner').slick({
		dots:true,
		arrows:false,
		fade:true,
		autoplay:true,
		autoplaySpeed: 2000
	})

	
	var containerEl1 = document.querySelector('[data-ref="filter"]');
            var containerEl2 = document.querySelector('[data-ref="filter2"]');

            var config = {
                controls: {
                    scope: 'local'
                }
            };

            var mixer1 = mixitup(containerEl1, config);
            var mixer1 = mixitup(containerEl2, config);
});