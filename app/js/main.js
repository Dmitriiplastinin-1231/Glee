$(function() {
	$('.related__slide').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows:'.related__slide-arrows',
  		prevArrow:'<img class="related__slide-arrow related__slide-prev" src="images/icons/arrow.svg" alt="arrow-left">',
  		nextArrow:'<img class="related__slide-arrow related__slide-next" src="images/icons/arrow.svg" alt="arrow-right">'
	})



	$('.product-tabs__top-item').on('click', function(e){
		e.preventDefault();
		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');
		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active');
	});


	$('.product-one__item-num').styler();



	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
  		focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true
	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
  		arrows: false,
  		fade: true
	});



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