function slider(width, colImg) {
	var step = width,
			sliderFrame = colImg * step,
			firstImg = 0,
			secondImg = -step,
			thirdImg = -(2 * step);

	$(".slider-frame").width(sliderFrame);

	var firstSlide = function() {
		$(".slider-frame").animate({ "margin-left" : firstImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_first").addClass("slider-pic__menu_active");
		console.log(0);
	};

	var secondSlide = function() {
		$(".slider-frame").animate({ "margin-left" : secondImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_second").addClass("slider-pic__menu_active");
		console.log(1);
	};

	var thirdSlide = function() {
		$(".slider-frame").animate({ "margin-left" : thirdImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_third").addClass("slider-pic__menu_active");
		console.log(2);
	};

	$(".slider-pic__menu_first").click(function() { firstSlide(); });
	$(".slider-pic__menu_second").click(function() { secondSlide(); });
	$(".slider-pic__menu_third").click(function() { thirdSlide(); });

	setInterval(function() {
		setTimeout(function() { firstSlide() }, 10000);
		setTimeout(function() { secondSlide() }, 10000);
		setTimeout(function() { thirdSlide() }, 10000);
	}, 5000);
};

$( slider(504, 3) );