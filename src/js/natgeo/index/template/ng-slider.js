
var slider = function(width) {
	var step = width,
		sliderFrame = 3 * step,
		firstImg = 0,
		secondImg = -step,
		thirdImg = -(2 * step),
		isPaused = true,
		timerState = 0;

	var firstSlide = function() {
		$(".slider-frame").animate({ "margin-left": firstImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_first").addClass("slider-pic__menu_active");
	};

	var secondSlide = function() {
		$(".slider-frame").animate({ "margin-left": secondImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_second").addClass("slider-pic__menu_active");
	};

	var thirdSlide = function() {
		$(".slider-frame").animate({ "margin-left": thirdImg }, 500);
		$(".slider-pic__menu>li.slider-pic__menu_active").removeClass("slider-pic__menu_active");
		$(".slider-pic__menu>li.slider-pic__menu_third").addClass("slider-pic__menu_active");
	};

	var timerSlider = function() {
		switch(timerState) {
			case 0: {
				setTimeout(function() {

					if (!isPaused) {
						firstSlide();
						timerState = 1;
					}
				}, 3000);
			}

			case 1: {
				setTimeout(function() {

					if (!isPaused) {
						secondSlide();
						timerState = 2;
					}
				}, 6000);
			}

			case 2: {
				setTimeout(function() {

					if (!isPaused) {
						thirdSlide();
						timerState = 0;
					}
				}, 9000);
			}
		}

		setTimeout(function() {
			if (!isPaused) { timerSlider(); }
		}, 12000)
	};

	var setSlider = function() {
		isPaused = !isPaused;

		if (!isPaused) {
			timerSlider();
			$(".slider-subscr__pause").css("background-color", "red");
		} else {
			$(".slider-subscr__pause").css("background-color", "black");
		}
	};

	$(".slider-frame").width(sliderFrame);

	$(".slider-subscr__pause").click(function() {
		setSlider();
	});

	$(".slider-pic__menu_first").click(function() { firstSlide(); });
	$(".slider-pic__menu_second").click(function() { secondSlide(); });
	$(".slider-pic__menu_third").click(function() { thirdSlide(); });

	setSlider();
};

$( slider(504) );

