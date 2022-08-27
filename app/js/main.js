$(function() {
	
	$('.shop__button').on('click', function () {
		$('.shop__button').removeClass('shop__button--active');
		$(this).addClass('shop__button--active');
	});

	$('.shop__line').on('click', function () {
		$('.product-item').addClass('product-item--line');
	});

	$('.shop__grid').on('click', function () {
		$('.product-item').removeClass('product-item--line');
	});

	$(".star").rateYo({
		starWidth: "18px",
		fullStar: true,
		ratedFill: "#ffcc00"
	});


	$(".filter-price__input").ionRangeSlider({
		type: "double",
		onChange: function (data) {
    		$('.filter-price__from').text(data.from);
    		$('.filter-price__to').text(data.to);
        }
	});



	$('.top-slider__inner').slick({
		dots:true,
		arrows:false,
		fade:true,
		autoplay:true,
		autoplaySpeed: 2000
	});



	
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