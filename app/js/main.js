$(function() {


	$('.shop__filter-btn').on('click', function(){
		$('.shop__filters').slideToggle()
	})

	$('.comment-button').on('click', function(){
		$(this).parent().parent().next().slideToggle()
	});

	$('.footer-top__title--activity').on('click', function(){
		$(this).siblings().slideToggle()
		$(this).toggleClass('footer-top__title--active')
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
	});


	$(function() {
  		// copy content to clipboard
  		function copyToClipboard(element) {
  			var $temp = $("<input>");
  			$("body").append($temp);
  			$temp.val($(element).text()).select();
  			document.execCommand("copy");
  			$temp.remove();
  		}
  		// copy coupone code to clipboard
  		$(".getinfo__item--address").click(function() {
  			copyToClipboard(".getinfo__item-info--address");
  			alert("Copied the text");
  		});
  	});
	$(function() {
  		// copy content to clipboard
  		function copyToClipboard(element) {
  			var $temp = $("<input>");
  			$("body").append($temp);
  			$temp.val($(element).text()).select();
  			document.execCommand("copy");
  			$temp.remove();
  		}
  		// copy coupone code to clipboard
  		$(".getinfo__item--email").click(function() {
  			copyToClipboard(".getinfo__item-info--email");
  			alert("Copied the text");
  		});
  	});
	$(function() {
  		// copy content to clipboard
  		function copyToClipboard(element) {
  			var $temp = $("<input>");
  			$("body").append($temp);
  			$temp.val($(element).text()).select();
  			document.execCommand("copy");
  			$temp.remove();
  		}
  		// copy coupone code to clipboard
  		$(".getinfo__item--phone").click(function() {
  			copyToClipboard(".getinfo__item-info--phone");
  			alert("Copied the text");
  		});
  	});
	$('.related__slide').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows:'.related__slide-arrows',
		prevArrow:'<img class="related__slide-arrow related__slide-prev" src="images/icons/arrow.svg" alt="arrow-left">',
		nextArrow:'<img class="related__slide-arrow related__slide-next" src="images/icons/arrow.svg" alt="arrow-right">',
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 826,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1
				}
			},
		]
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
		vertical: true,
	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		arrows: false,
		fade: true,
		draggable: false,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				draggable: true
			}
		}
		]
	});



	$('.shop__button').on('click', function () {
		$('.shop__button').removeClass('shop__button--active');
		$(this).addClass('shop__button--active');
	});

	$('.shop__line').on('click', function () {
		$('.product-item').addClass('product-item--line');
		$('.shop-content__inner').addClass('shop-content__no-grid');
	});

	$('.shop__grid').on('click', function () {
		$('.product-item').removeClass('product-item--line');
		$('.shop-content__inner').removeClass('shop-content__no-grid');
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